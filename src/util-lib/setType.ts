export type MapObject<B> = {
    [key: string]: B;
};

export type isDefinedNonNullable<T> = T extends undefined | null ? never : T;

export type replaceNullWithUndefined<T> = T extends null ? undefined : T;

/** Infer can be used to access enclosed type e.g.
 * type FlattenIfArray<T> = T extends (infer R)[] ? R : T
 * type Unpromisify<T> = T extends Promise<infer R> ? R : T
 * *  F extends FuncWithOneObjectArgument<infer P, any> ? P : never;
 * type Flip<T> = T extends [infer A, infer B] ? [B, A] : never **/

export type NonNullableObj<T> = {
    /** recursive through object if val is object then recusive */
    [K in keyof T]: T[K] extends Record<string, unknown> ? NonNullableObj<T[K]> : NonNullable<T[K]>;
};

export type PartialNested<T> = {
    [P in keyof T]?: PartialNested<T[P]>;
};

export type isDefinedNonNullableObj<T> = {
    /**
     * The -? is the syntax used to explicitly remove any optional modifier
     * https://stackoverflow.com/questions/52254098/typescript-what-does-this-grammar-dash-question-mean
     */
    [K in keyof T]-?: isDefinedNonNullable<T[K]>;
};

export type replaceNullsWithUndefined<T> = {
    [K in keyof T]: replaceNullWithUndefined<T[K]>;
};
