/** A shallow copy of a data object. */
export function shallowClone(src) {
    const out = {};
    for (const key of Object.keys(src))
        out[key] = src[key];
    return out;
}
/** Copies `src` into `dst`, overwriting on a key collision. */
export function copyInto(dst, src) {
    if (src === undefined)
        return;
    for (const key of Object.keys(src)) {
        const value = src[key];
        if (value === undefined)
            continue;
        dst[key] = value;
    }
}
/** A copy with every key lowercased, for reading a header record case-insensitively. */
export function lowerCaseKeys(src) {
    const out = {};
    for (const key of Object.keys(src)) {
        const value = src[key];
        if (value === undefined)
            continue;
        out[key.toLowerCase()] = value;
    }
    return out;
}
//# sourceMappingURL=record.js.map