import { log } from '../logger';

export function areCoordsClosed<T>(arr: T[], getter: (arg0: T) => any) {
    const l = arr.length;
    if (l > 4) {
        if (getter(arr[0]) === getter(arr[l - 1])) {
            return true;
        }
    }
}

export function makeCoordsClosed(g: { x: number; y: number }[]) {
    if (
        !(
            areCoordsClosed<{ x: number; y: number }>(g, (i) => i.x) &&
            areCoordsClosed<{ x: number; y: number }>(g, (i) => i.y)
        )
    ) {
        g.push(g[0]);
    }
}

// custom type guards
export const removeNullOrUndefined = <S>(value: S | undefined | null): value is NonNullable<S> => {
    if (typeof value === 'undefined' || value === null) {
        return false;
    }
    return true;
};

export const removeUndefined = <S>(value: S | undefined): value is S => value !== undefined;

/** Are they the same @returns boolean */
export function shallowCompareSortedArr(arr1: any[], arr2: any[]): boolean {
    return Object.keys(arr1).length === Object.keys(arr2).length && arr1.every((s, i) => s === arr2?.[i]);
}
