/** RFC 3986 percent-encoding over UTF-8 bytes with uppercase hex. */
export declare function escapePath(value: string, encodeSlash: boolean): string;
/** The same encoding, with `/` escaped too. */
export declare function escapeUriComponent(value: string): string;
/**
 * Joins already-encoded pairs: sorted by their encoded key, and a key with an empty value emitted
 * bare with no `=`. The wire URL, the V4 canonical request and a presigned URL are all this output.
 */
export declare function joinEncodedQuery(encoded: Record<string, string>): string;
/** Builds a query string from decoded parameters. */
export declare function buildQueryString(parameters: Record<string, string>): string;
/** Returns the encoded query from `url`, rewriting a bare `+` to `%20`. */
export declare function parseEncodedQuery(url: string): Record<string, string>;
/** `url` with its query replaced, leaving no `?` behind when `query` is empty. */
export declare function withQuery(url: string, query: string): string;
