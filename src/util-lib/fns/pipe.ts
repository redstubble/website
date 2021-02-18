/** https://dev.to/ascorbic/creating-a-typed-compose-function-in-typescript-3-351i */
export const pipe = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
    fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)), fn1);

//   const pipedFunction = pipe(fn1, fn2, fn3);
//   expect(pipedFunction("inner")).toBe("fn3(fn2(fn1(inner)))");
// });

export const areDefined = (...booleans: unknown[]) => booleans.every((b) => !!b === true);

export const isTrueT = (booleans: unknown[]): booleans is true[] => {
    return booleans.every((b) => !!b === true);
};
