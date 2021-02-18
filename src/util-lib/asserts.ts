import log from './logger/logger';
import { NotNull } from '../utilTypes';

export const assertDefined = <T>(value?: NotNull<T>, _msg?: string): asserts value => {
    if (value === null || typeof value === 'undefined') {
        const msg = _msg ?? 'Assert Error';
        log.error(msg);
        throw new Error(msg);
    }
};

export const assertInstanceOf = <T, C extends new (...args: any[]) => any>(
    value: T | undefined,
    clss: C,
): asserts value is T => {
    if (!(value instanceof clss)) {
        throw new Error('Controller not built');
    }
};

export const assertNumber = (n?: number, _msg?: string): asserts n is number => {
    if (!(typeof n === 'number')) {
        const msg = _msg ?? 'Assert Error';
        log.error(msg);
        throw new Error('Not a number!');
    }
};

export const assertNumberArr = (n: (number | undefined)[], _msg?: string): asserts n is number[] => {
    if (!Array.isArray(n) || !n.every((p) => typeof p === 'number')) {
        const msg = _msg ?? 'Assert Error';
        log.error(msg);
        throw new Error('Not a number array!');
    }
};

export const assertString = (str?: string, _msg?: string): asserts str is string => {
    if (!(typeof str === 'string')) {
        const msg = _msg ?? 'Assert Error';
        log.error(msg);
        throw new Error('Not a string!');
    }
};
export const assertBoolean = (bool?: boolean, _msg?: string): asserts bool is boolean => {
    if (!(typeof bool === 'boolean')) {
        const msg = _msg ?? 'Assert Error';
        log.error(msg);
        throw new Error('Not a boolean!');
    }
};
