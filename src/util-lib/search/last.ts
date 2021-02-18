import { SearchResult } from './binary';
import { DataPointObj } from '../../utilTypes/devices';
import { getHistory } from '../array/interpolate';
import { TrailHistory } from '../../utilTypes/store';
import { Store_IgtimiDeviceData_arrVals } from '../../modTypes/igtimi-worker-store/model.dataPoints';

export const last = (history?: TrailHistory) => (
    arr: Store_IgtimiDeviceData_arrVals,
    dataPointName: keyof DataPointObj,
    cachedIndex?: number,
): SearchResult => {
    const index = arr.length - 1;
    const data = arr[index];

    if (dataPointName === 'pos' && history) {
        const result = getHistory(arr, index, history, data);
        return result;
    }

    return {
        result: [data],
        cacheIndex: index,
    };
};

export default last;
