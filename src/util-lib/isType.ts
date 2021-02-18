type Primitive = boolean | string | number;

export const predicateNumber = (n?: number | string): n is number => {
    return typeof n === 'number';
};

export const predicateString = (str?: string): str is string => {
    return typeof str === 'string';
};

export const predicateBoolean = (bool: boolean | undefined): bool is boolean => {
    return typeof bool === 'boolean';
};

export const predicateInstanceOf = <T, C extends new (...args: any[]) => any>(value: T, clss: C): boolean => {
    return value instanceof clss;
};

/** reg ex does typeof being with s/string, b/boolean, n/number */
export function isPrimitive(val: any) {
    return val == null || /^[sbn]/.test(typeof val);
}
