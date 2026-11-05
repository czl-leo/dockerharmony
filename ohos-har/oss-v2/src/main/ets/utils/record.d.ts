/** A shallow copy of a data object. */
export declare function shallowClone<T extends object>(src: T): T;
/** Copies `src` into `dst`, overwriting on a key collision. */
export declare function copyInto(dst: Record<string, string>, src?: Record<string, string>): void;
/** A copy with every key lowercased, for reading a header record case-insensitively. */
export declare function lowerCaseKeys(src: Record<string, string>): Record<string, string>;
