/** How long a query-mode signature lasts when the caller named no expiry. */
export const DEFAULT_EXPIRATION_MS = 15 * 60 * 1000;
/** The set the server signs without being told to. */
export function isDefaultSignedHeader(lower) {
    return lower.startsWith('x-oss-') || lower === 'content-type' || lower === 'content-md5';
}
//# sourceMappingURL=types.js.map