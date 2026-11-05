/** RFC 1123 in GMT, e.g. `Wed, 28 Dec 2022 10:27:41 GMT`. The `Date` header format. */
export declare function httpTime(value: Date): string;
/** Parses the `Date` and `Last-Modified` headers without throwing. */
export declare function parseHttpTime(value: string): Date | undefined;
/** V4 `x-oss-date`, e.g. `20231216T162057Z`. */
export declare function iso8601Datetime(value: Date): string;
/** V4 credential scope date, e.g. `20231216`. */
export declare function iso8601Date(value: Date): string;
