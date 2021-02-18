import { com } from 'igtimi-js-proto';
import { baseBinarySearchSortedArrRoundDown } from '../search/binary';
import constants from '../constants';
import { TrailHistory } from '../../utilTypes/store';
import { utils } from '../..';
import { IGNSS_PositionInterpolated } from '../../modTypes/igtimi-worker-store/model.dataPoints';
import { getEarliestAvailableDataPoint } from '../object.igtimi';

type valsType = [com.igtimi.IGNSS_Position, com.igtimi.IGNSS_Position] | [com.igtimi.IHeading, com.igtimi.IHeading];

/**
 * Base in index slice indexed item and item below
 * From [number, number] tuple
 */
export function _getRangePercentBasedOnIndex(
    arr: com.igtimi.IGNSS_Position[] | com.igtimi.IHeading[],
    time: number,
    index: number,
) {
    const vals = arr.slice(index - 1, index + 1) as valsType; // slice(begin, end NOT INCLUDED) need to move end up one as not included
    const percent = interpolate.getPercent((vals as any[]).map((t) => t.timestamp) as [number, number], time);
    if (percent === NaN) {
        debugger;
        const err = new Error('interpolation error');
        utils.log.error(err.message, ['unable to interpolate', { vals, time }], [err.name, err.stack]);
    }
    return {
        vals,
        percent,
    };
}

export function getHistory(
    arr: com.igtimi.IGNSS_Position[],
    currentIndex: number,
    history: TrailHistory,
    currentBoatPositionValue: com.igtimi.IGNSS_Position,
) {
    const { periodTotalMs, periodPerPointMs } = history;
    const result = arr[currentIndex];

    // add to ms to ensure have values for all range when interpolating in main
    const earliestHistoryTime =
        (result.timestamp as number) - (periodTotalMs + constants.boat.trail.trailHistoryPadding);
    // get index of earliest item needed in history
    const earliestHistoryIndex = baseBinarySearchSortedArrRoundDown(arr, earliestHistoryTime, (a: any) => a.timestamp);

    const historyTimeDescArr = arr.slice(
        earliestHistoryIndex,
        currentIndex + 1, // get history not current position slice does not include end index
    ) as com.igtimi.IGNSS_Position[];

    const earliestAvailablePos = getEarliestAvailableDataPoint(historyTimeDescArr);
    const { timestamp: _earliestAvailableTimestamp } = earliestAvailablePos || {};
    const earliestAvailableTimestamp = _earliestAvailableTimestamp ?? Infinity;

    const trailPointsOldestFirstArr: com.igtimi.IGNSS_Position[] = [];
    /***** */
    /** First point is last rounded second ago */
    const trailPt1 = Math.floor(currentBoatPositionValue!.timestamp! / 1000) * 1000;
    const totalNoPoints = Math.floor(periodTotalMs / periodPerPointMs);
    let i = totalNoPoints;

    /** backwards to populate elements backwards */
    for (; i >= 0; i--) {
        const periodPoint = periodPerPointMs * i;
        const timeRequest = trailPt1 - periodPoint;
        if (timeRequest > earliestAvailableTimestamp) {
            const index = baseBinarySearchSortedArrRoundDown(historyTimeDescArr, timeRequest, (a) => a?.timestamp);
            const pos = historyTimeDescArr[index];
            if (pos) {
                trailPointsOldestFirstArr.push(pos);
            }
        }
    }
    /***** */
    trailPointsOldestFirstArr.push(currentBoatPositionValue);

    return {
        result: trailPointsOldestFirstArr, // earliest at index 0, latest at index.length - 1
        cacheIndex: currentIndex, // keep value in range for future cache search
    };
}

/**
 * Object that includes interpolate methods
 */

export const interpolate = {
    /**
     * Interpolates two values to calculate value at percent
     * @param {[number, number]} Values
     * @param {number} percent {range 0-1}
     * @example
     *  interpolate(1,5,0.5) returns 3
     */
    getValue([first, second]: [number, number], percent: number) {
        if (percent === 1) {
            return second;
        }
        if (percent === 0) {
            return first;
        }

        const difference = second - first;
        return first + difference * percent;
    },

    /**
     * Given first and second values, calculates value at percent within the two values
     * @param {[number, number]} Values
     * @param {number} requested value
     * @param {number} range result
     * @example
     *   percent(1, 5, 3) returns 0.5
     */
    getPercent([first, second]: [number, number], value: number) {
        const difference = second - first;
        return difference === 0 ? 0 : (value - first) / difference;
    },

    /**
     * Given first and second pos, calculates value at percent within the two values
     * Given first and second pos, calculates value at percent within the two values
     * @param {[number, number]} Values
     * @param {number} requested value
     */
    getPos([first, second]: [number, number], percent: number) {
        if (percent === 1) {
            return second;
        }
        if (percent === 0) {
            return first;
        }

        const difference = second - first;
        const interpolated = difference * percent + first;
        return interpolated;
    },

    /**
     * Given first and second angles, calculates value at percent within the two values
     * Given first and second values, calculates value at percent within the two values
     * @param {[number, number]} Values
     * @param {number} requested value
     * @param {number} range round to range e.g. if 360 interpolated 355 and 0 at 0.5 will be 375 not 177
     * @example
     *  percent 0 - 1
     */
    getAngle([first, second]: [number, number], percent: number, range: 180 | 360) {
        if (percent === 1) {
            return second;
        }
        if (percent === 0) {
            return first;
        }

        let difference = second - first;
        if (Math.abs(difference) > range / 2) {
            difference = difference < 0 ? difference + range : difference - range;
        }
        const interpolated = difference * percent + first;
        const sign = interpolated < 0 ? -1 : 1;
        return (interpolated * Math.sign(interpolated)) / range / 2 > 1 ? interpolated - range * sign : interpolated;
    },

    interpolateGPSPoint(
        vals: [com.igtimi.GNSS_Position, com.igtimi.GNSS_Position],
        percent: number,
        timestamp: number,
    ): IGNSS_PositionInterpolated {
        /*
         * vals are gps points with timestamp(in millisecond)
         * {
         *  "latitude": xxx,
         *  "longitude": xxx,
         *  "timestamp": xxx
         * }
         */
        return {
            timeBounds: [vals[0].timestamp as number, vals[1].timestamp as number],
            interpolated: true,
            timestamp: timestamp,
            latitude: this.getPos([vals[0].latitude, vals[1].latitude], percent),
            longitude: this.getPos([vals[0].longitude, vals[1].longitude], percent),
        };
    },
};
