/**
 *  utils.generics.objectAssignTypeSafety<DisplayStoriesObject, 'events'>(
                    initialDisplayStoryState,
                    state[storyId],
                    {
                        events,
                    },
                );
                acc[storyId] = updatedStory;
                return acc;
 */

/**
 * Ensures that do not lose type safety in redux destructuring
 * @see https://stackoverflow.com/questions/44525777/typescript-type-not-working-with-spread-operator
 */

export const objectAssignTypeSafety = <S, K extends keyof S>(state: S, ...changes: Pick<S, K>[]): S =>
    Object.assign({}, state, ...changes);

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

export type MutableArray<T> = T extends ReadonlyArray<infer U> ? U : never;
