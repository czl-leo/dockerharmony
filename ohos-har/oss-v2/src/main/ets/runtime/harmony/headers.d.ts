/** What a platform HTTP module may hand back as a header map. */
export type RawHeaders = Record<string, string | string[] | number | undefined>;
/** Normalizes a platform header map to a lowercased `Record<string, string>`. */
export declare function normalizeHeaders(raw: RawHeaders): Record<string, string>;
