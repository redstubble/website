import { com } from 'igtimi-js-proto';
import { SearchResult, baseBinarySearchSortedArrRoundUpCachedIndex } from './binary';
import { interpolate, _getRangePercentBasedOnIndex, getHistory } from '../array/interpolate';
import { DataPointObj } from '../../utilTypes/devices';
import { TrailHistory } from '../../utilTypes/store';
import {
    Store_IgtimiDeviceData_arrVals,
    IGNSS_PositionInterpolated,
    Store_IgtimiDeviceData_vals,
} from '../../modTypes/igtimi-worker-store/model.dataPoints';

/**
 * used to ensure that when using boat trail new requests based on more recent times
 * do not lose context of previous trail e.g. data points from old array are still present
 * within new request to show old datapoints
 */

const getInterpolatedGPS = (
    arr: com.igtimi.IGNSS_Position[],
    time: number,
    cachedIndex?: number,
): [com.igtimi.IGNSS_Position | IGNSS_PositionInterpolated, number] => {
    const i = baseBinarySearchSortedArrRoundUpCachedIndex(arr, time, (a: any) => a.timestamp, cachedIndex);
    /**
     * Check time requested is lower than data received
     * Check index has history
     */
    const { timestamp } = arr[i];
    if ((timestamp && time > timestamp) || i === 0) {
        return [arr[i], i];
    }
    const { vals, percent } = _getRangePercentBasedOnIndex(arr, time, i);
    const interpolatedGNSS_Position = interpolate.interpolateGPSPoint(
        vals as [com.igtimi.GNSS_Position, com.igtimi.GNSS_Position],
        percent,
        time,
    );
    return [interpolatedGNSS_Position, Math.max(i - 1, 0)]; // as interpolating move index 1 down so future cache can find it
};

const getInterpolatedAngle = (
    arr: com.igtimi.IHeading[],
    time: number,
    cachedIndex?: number,
): [com.igtimi.IHeading, number] => {
    const i = baseBinarySearchSortedArrRoundUpCachedIndex(arr, time, (a: any) => a.timestamp, cachedIndex);
    /**
     * Check time requested is lower than data received
     * Check index has history
     */
    const { timestamp } = arr[i];
    if ((timestamp && time > timestamp) || i === 0) {
        return [arr[i], i];
    }

    const { vals, percent } = _getRangePercentBasedOnIndex(arr, time, i);
    const angles = (vals as [com.igtimi.Heading, com.igtimi.Heading]).map((t) => t.value) as [number, number];
    const interpolatedValue: com.igtimi.Heading['value'] = interpolate.getAngle(angles, percent, 360);

    const heading = new com.igtimi.Heading({
        timestamp: time,
        value: interpolatedValue,
    });

    return [heading, i]; // as interpolating move index 1 down so future cache can find it
};

const linear = (time: number, history?: TrailHistory) => (
    arr: Store_IgtimiDeviceData_arrVals,
    dataPointName: keyof DataPointObj,
    cachedIndex?: number,
): SearchResult => {
    if (dataPointName === 'pos') {
        const [interpolatedValue, index] = getInterpolatedGPS(arr as com.igtimi.IGNSS_Position[], time, cachedIndex);
        /** Get trail breadcrumb trail */
        if (history) {
            const result = getHistory(arr, index, history, interpolatedValue);
            return result;
        }
        return {
            result: [interpolatedValue],
            cacheIndex: index, // keep value in range for future cache search
        };
    } else if (dataPointName === 'hdg') {
        const [interpolatedValue, index] = getInterpolatedAngle(arr as com.igtimi.Heading[], time);
        return {
            result: [interpolatedValue],
            cacheIndex: index,
        };
    }
    const indexFCache = baseBinarySearchSortedArrRoundUpCachedIndex<Store_IgtimiDeviceData_vals>(
        arr,
        time,
        (a: any) => a.timestamp,
        cachedIndex || undefined,
    );
    return {
        result: [arr[indexFCache]],
        cacheIndex: indexFCache, // keep value in range for future cache search
    };
};

export default linear;
