import { SearchResult, baseBinarySearchSortedArrRoundUpCachedIndex } from './binary';
import { DataPointObj } from '../../utilTypes/devices';
import { getHistory } from '../array/interpolate';
import { TrailHistory } from '../../utilTypes/store';
import {
    Store_IgtimiDeviceData_arrVals,
    Store_IgtimiDeviceData_vals,
} from '../../modTypes/igtimi-worker-store/model.dataPoints';

export const mostRecent = (time: number, history?: TrailHistory) => (
    arr: Store_IgtimiDeviceData_arrVals,
    dataPointName: keyof DataPointObj,
    cachedIndex?: number,
): SearchResult => {
    const index = baseBinarySearchSortedArrRoundUpCachedIndex<Store_IgtimiDeviceData_vals>(
        arr,
        time,
        (a: any) => a.timestamp,
        cachedIndex,
    );
    const result = arr[index];
    if (dataPointName === 'pos' && history) {
        const data = getHistory(arr, index, history, result);
        return data;
    }

    return {
        result: [result],
        cacheIndex: index,
    };
};

export default mostRecent;
