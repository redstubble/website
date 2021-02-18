import { workerDeviceData_arrVals } from '../../modTypes/igtimi-worker-store/model.dataPoints';

export interface SearchResult {
    result: workerDeviceData_arrVals;
    cacheIndex: number;
}

export type valueGetterFn<T> = (a: T | undefined) => number | undefined | null;

/** boxes value getter and catches any result that result in undefined  */
export const forceToNumber = <T>(fn: (a: T) => number | string | undefined | null) => (arg: T): number => {
    /** Will return number or NaN */
    return Number(fn(arg));
};

/** Get last in array or return null */
export const lastInArray = <T>(arr: T[]): T | undefined => {
    // if (arr instanceof Array) {
    return arr[arr.length - 1];
    // }
    // return undefined;
};

/**
 * Checks if the requested val of the last item in the array
 * is less than the sequence ID of the item to be added
 */
export const pushItemToEndArr = <T>(sortedArr: T[], requestVal: number, valueGetterFn: valueGetterFn<T>) => {
    if (!isNaN(requestVal) && sortedArr.length == 0) {
        return true;
    }
    if (!isNaN(requestVal) && sortedArr.length) {
        const lastItemInArr = lastInArray<T>(sortedArr);
        if (forceToNumber(valueGetterFn)(lastItemInArr) < requestVal) {
            return true;
        }
    }
    return false;
};

/**
 * Base Search used by all both linear and most recent
 * @param {Array<DataPointType>} sortedArr  Values to search
 * @param {number} requestVal  requested value
 * @param {number|undefined} lowParam search low index
 * @param {number|undefined} highParam search high index
 * Returns index to insert item, same as baseBinarySearchSortedArrRoundUp however will return an index
 * that will resolve to undefined if the item is above all items in the index
 * unless at end of array then will return last index in array
 * @example
 *    baseSearchSortedArr([10,20,30,40,50], 40.01) return 4
 *    baseSearchSortedArr([10,20,30,40,50], 99) return 5
 */
export const baseBinarySearchInsertArr = <T>(
    sortedArr: T[],
    requestVal: number,
    valueGetterFn: valueGetterFn<T>,
    lowParam?: number,
    highParam?: number,
): number => {
    let low = lowParam || 0;
    if (sortedArr.length) {
        let high = highParam || sortedArr.length;
        while (low < high) {
            const mid = (low + high) >> 1; // add the two then divides by two throwing out any remainer
            forceToNumber(valueGetterFn)(sortedArr[mid]) < requestVal ? (low = mid + 1) : (high = mid);
        }
        if (low > sortedArr.length) {
            debugger;
            throw Error('baseBinarySearchSortedArr Error');
        }
    }
    return low;
};

interface BinarySearchParams<T> {
    sortedArr: T[];
    requestVal: number;
    valueGetterFn: valueGetterFn<T>;
    cachedIndex: number;
}

// on basis of roughly 20hz data
function recursiveNarrowSortedArrSearch(b: BinarySearchParams<any>) {
    const { sortedArr, requestVal, valueGetterFn, cachedIndex } = b;
    let lowIndex: number | undefined = undefined;
    let highIndex: number | undefined = undefined;
    const runLowIndex = (tmpCachedIndex: number) => {
        if (sortedArr[tmpCachedIndex]) {
            if (forceToNumber(valueGetterFn)(sortedArr[tmpCachedIndex]) <= requestVal) {
                lowIndex = tmpCachedIndex;
                if (Math.abs(cachedIndex - tmpCachedIndex) < 250) {
                    runLowIndex(tmpCachedIndex + 40); // 2 secs based on 20 htz
                }
            } else {
                highIndex = tmpCachedIndex;
            }
        }
        return lowIndex;
    };
    const runHighIndex = (tmpCachedIndex: number) => {
        if (sortedArr[tmpCachedIndex]) {
            if (forceToNumber(valueGetterFn)(sortedArr[tmpCachedIndex]) > requestVal) {
                highIndex = tmpCachedIndex;
                // only runs 3 times
                if (Math.abs(cachedIndex - tmpCachedIndex) < 250) {
                    runHighIndex(tmpCachedIndex - 40); // 2 secs based on 20 htz
                }
            }
        }
        return highIndex;
    };
    runLowIndex(cachedIndex);
    runHighIndex(highIndex || cachedIndex);
    return {
        highIndex,
        lowIndex,
    };
}

export const baseBinarySearchSortedArrRoundUpCachedIndex = <T>(
    sortedArr: T[],
    requestVal: number,
    valueGetterFn: valueGetterFn<T>,
    cachedIndex?: number,
): number => {
    if (typeof cachedIndex === 'number') {
        const { lowIndex, highIndex } = recursiveNarrowSortedArrSearch({
            sortedArr,
            requestVal,
            valueGetterFn,
            cachedIndex,
        });

        const index = baseBinarySearchSortedArrRoundUp(sortedArr, requestVal, valueGetterFn, lowIndex, highIndex);
        return index;
    }
    return baseBinarySearchSortedArrRoundUp(sortedArr, requestVal, valueGetterFn);
};

/**
 * Base Search used by all both linear and most recent
 * @param {Array<DataPointType>} sortedArr  Values to search
 * @param {number} requestVal  requested value
 * @param {number|undefined} lowParam search low index
 * @param {number|undefined} highParam search high index
 * Returns index that represents the value that is above requestVal,
 * unless at end of array then will return last index in array
 * @example
 *    baseSearchSortedArr([10,20,30,40,50], 40.01) return 4
 *    baseSearchSortedArr([10,20,30,40,50], 99) return 4
 */
export const baseBinarySearchSortedArrRoundUp = <T>(
    sortedArr: T[],
    requestVal: number,
    valueGetterFn: valueGetterFn<T>,
    lowParam?: number,
    highParam?: number,
): number => {
    let low = lowParam || 0;
    if (sortedArr.length) {
        let high = highParam || sortedArr.length - 1;
        while (low < high) {
            const mid = (low + high) >> 1; // add the two then divides by two throwing out any remainer
            forceToNumber(valueGetterFn)(sortedArr[mid]) < requestVal ? (low = mid + 1) : (high = mid);
        }
        if (low > sortedArr.length - 1) {
            debugger;
            throw Error('baseBinarySearchSortedArr Error');
        }
    }
    return low;
};

/**
 * Base Search used by all both linear and most recent
 * @param {Array<DataPointType>} sortedArr  Values to search
 * @param {number} requestVal  requested value
 * @param {number|undefined} lowParam search low index
 * @param {number|undefined} highParam search high index
 * Returns index that represents the value that is below requestVal,
 * unless at end of array then will return last index in array
 * @example
 *    baseSearchSortedArr([10,20,30,40,50], 40.01) return 3
 *    baseSearchSortedArr([10,20,30,40,50], 99) return 4
 */
export const baseBinarySearchSortedArrRoundDown = <T>(
    sortedArr: T[],
    requestVal: number,
    valueGetterFn: valueGetterFn<T>,
    lowParam?: number,
    highParam?: number,
): number => {
    let low = lowParam || 0;
    if (sortedArr.length) {
        let high = highParam || sortedArr.length - 1;
        while (low < high) {
            const mid = Math.ceil((low + high) / 2); // add the two then divides by two throwing out any remainer
            forceToNumber(valueGetterFn)(sortedArr[mid]) > requestVal ? (high = mid - 1) : (low = mid);
        }
        if (low > sortedArr.length - 1) {
            debugger;
            throw Error('baseBinarySearchSortedArr Error');
        }
    }
    return low;
};

// const haystack = [
//     {
//         startTime: 1597987648114,
//         endTime: 1597987948113,
//         _state: 'LOADED',
//         hashLookup: 3195975596227,
//     },
//     {
//         startTime: 1597987948114,
//         endTime: 1597988248113,
//         _state: 'LOADING',
//         hashLookup: 3195976196227,
//     },
//     {
//         startTime: 1597988248114,
//         endTime: 1597988548113,
//         _state: 'LOADING',
//         hashLookup: 3195976796227,
//     },
//     {
//         startTime: 1597988548114,
//         endTime: 1597988848113,
//         _state: 'LOADING',
//         hashLookup: 3195977396227,
//     },
//     {
//         startTime: 1597988848114,
//         endTime: 1597989148113,
//         _state: 'LOADING',
//         hashLookup: 3195977996227,
//     },
//     {
//         startTime: 1597989148114,
//         endTime: 1597989448113,
//         _state: 'EMPTY',
//         hashLookup: 3195978596227,
//     },
//     {
//         startTime: 1597987648114,
//         endTime: 1597987948113,
//         _state: 'EMPTY',
//         hashLookup: 3195975596227,
//     },
//     {
//         startTime: 1597987948114,
//         endTime: 1597988248113,
//         _state: 'EMPTY',
//         hashLookup: 3195976196227,
//     },
//     {
//         startTime: 1597988248114,
//         endTime: 1597988548113,
//         _state: 'EMPTY',
//         hashLookup: 3195976796227,
//     },
//     {
//         startTime: 1597988548114,
//         endTime: 1597988848113,
//         _state: 'EMPTY',
//         hashLookup: 3195977396227,
//     },
//     {
//         startTime: 1597988848114,
//         endTime: 1597989148113,
//         _state: 'EMPTY',
//         hashLookup: 3195977996227,
//     },
// ];

// const needle = 3195978596227;

// console.log(
//     baseBinarySearchSortedArrRoundUp<typeof haystack[0]>(
//         haystack.sort((a, b) => a.hashLookup - b.hashLookup),
//         needle,
//         (g) => g?.hashLookup,
//     ),
// );
