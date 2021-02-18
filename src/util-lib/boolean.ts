/** state maybe undefined so need to show if state is specifically boolean */
export function getBoolStateOrDefault(def: boolean, bool: boolean | undefined) {
    if (typeof bool === 'boolean') {
        return bool;
    }
    return def;
}
