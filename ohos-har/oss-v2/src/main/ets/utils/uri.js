import { utf8Encode } from './bytes.js';
const HEX = '0123456789ABCDEF';
function isUnreserved(b) {
    return ((b >= 0x41 && b <= 0x5a) ||
        (b >= 0x61 && b <= 0x7a) ||
        (b >= 0x30 && b <= 0x39) ||
        b === 0x2d ||
        b === 0x2e ||
        b === 0x5f ||
        b === 0x7e);
}
/** RFC 3986 percent-encoding over UTF-8 bytes with uppercase hex. */
export function escapePath(value, encodeSlash) {
    const bytes = utf8Encode(value);
    let out = '';
    for (let i = 0; i < bytes.length; i++) {
        const b = bytes[i];
        if (isUnreserved(b)) {
            out += String.fromCharCode(b);
        }
        else if (b === 0x2f && !encodeSlash) {
            out += '/';
        }
        else {
            out += '%' + HEX[b >> 4] + HEX[b & 15];
        }
    }
    return out;
}
/** The same encoding, with `/` escaped too. */
export function escapeUriComponent(value) {
    return escapePath(value, true);
}
/**
 * Joins already-encoded pairs: sorted by their encoded key, and a key with an empty value emitted
 * bare with no `=`. The wire URL, the V4 canonical request and a presigned URL are all this output.
 */
export function joinEncodedQuery(encoded) {
    const keys = Object.keys(encoded);
    // Encoded keys are sorted lexicographically by UTF-16 code unit.
    keys.sort();
    const parts = [];
    for (const key of keys) {
        const value = encoded[key] ?? '';
        parts.push(value.length > 0 ? key + '=' + value : key);
    }
    return parts.join('&');
}
/** Builds a query string from decoded parameters. */
export function buildQueryString(parameters) {
    const encoded = {};
    for (const key of Object.keys(parameters)) {
        encoded[escapeUriComponent(key)] = escapeUriComponent(parameters[key] ?? '');
    }
    return joinEncodedQuery(encoded);
}
/** Returns the encoded query from `url`, rewriting a bare `+` to `%20`. */
export function parseEncodedQuery(url) {
    const encoded = {};
    const at = url.indexOf('?');
    if (at < 0)
        return encoded;
    for (const segment of url.substring(at + 1).replace(/\+/g, '%20').split('&')) {
        if (segment.length === 0)
            continue;
        const eq = segment.indexOf('=');
        if (eq < 0)
            encoded[segment] = '';
        else
            encoded[segment.substring(0, eq)] = segment.substring(eq + 1);
    }
    return encoded;
}
/** `url` with its query replaced, leaving no `?` behind when `query` is empty. */
export function withQuery(url, query) {
    const at = url.indexOf('?');
    const base = at < 0 ? url : url.substring(0, at);
    return query.length > 0 ? base + '?' + query : base;
}
//# sourceMappingURL=uri.js.map