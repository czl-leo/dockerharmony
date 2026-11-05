import { ParamInvalidError, ParamRequiredError } from '../error/types.js';
import { lowerCaseKeys } from '../utils/record.js';
import { parseHttpTime } from '../utils/time.js';
const USER_METADATA_PREFIX = 'x-oss-meta-';
export function resultCommon(output) {
    const headers = lowerCaseKeys(output.headers);
    return {
        status: output.status,
        statusCode: output.statusCode,
        requestId: headers['x-oss-request-id'] ?? '',
        headers,
    };
}
/** Collects `x-oss-meta-*` from an already-lowercased header map, prefix removed. */
export function userMetadata(headers) {
    const metadata = {};
    let found = false;
    for (const key of Object.keys(headers)) {
        if (!key.startsWith(USER_METADATA_PREFIX))
            continue;
        const value = headers[key];
        if (value === undefined)
            continue;
        metadata[key.slice(USER_METADATA_PREFIX.length)] = value;
        found = true;
    }
    return found ? metadata : undefined;
}
/** Writes the caller's metadata as `x-oss-meta-*` headers. */
export function applyUserMetadata(headers, metadata) {
    if (metadata === undefined)
        return;
    for (const key of Object.keys(metadata)) {
        const value = metadata[key];
        if (value === undefined)
            continue;
        headers.set(USER_METADATA_PREFIX + key, value);
    }
}
/** Returns `undefined` for a missing, blank or non-finite value. */
export function toNumber(value) {
    if (value === undefined || value.trim().length === 0)
        return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
}
export function toDate(value) {
    return value === undefined ? undefined : parseHttpTime(value);
}
export function toBoolean(value) {
    return value === undefined ? undefined : value.toLowerCase() === 'true';
}
/** Asserts a required modelled field was supplied. */
export function requireField(value, field) {
    if (value === undefined)
        throw new ParamRequiredError(field);
    return value;
}
/** Query-parameter setters. Parameter names are case-sensitive. */
export function setString(target, name, value) {
    if (value !== undefined)
        target[name] = value;
}
export function setNumber(target, name, value) {
    if (value === undefined)
        return;
    if (!Number.isFinite(value))
        throw new ParamInvalidError(name);
    target[name] = String(value);
}
export function setBoolean(target, name, value) {
    if (value !== undefined)
        target[name] = value ? 'true' : 'false';
}
/** The header setters, writing through the case-insensitive `HeaderFields`. */
export function setHeaderString(headers, name, value) {
    if (value !== undefined)
        headers.set(name, value);
}
export function setHeaderNumber(headers, name, value) {
    if (value === undefined)
        return;
    if (!Number.isFinite(value))
        throw new ParamInvalidError(name);
    headers.set(name, String(value));
}
export function setHeaderBoolean(headers, name, value) {
    if (value !== undefined)
        headers.set(name, value ? 'true' : 'false');
}
/** Writes a fixed `Content-Type` when none is set. */
export function setContentTypeIfAbsent(headers, value) {
    if (headers.get('content-type') !== undefined)
        return;
    headers.set('Content-Type', value);
}
const EMPTY_BODY_CONTENT_MD5 = '1B2M2Y8AsgTpgAmY7PhCfg==';
/**
 * Writes `Content-MD5` unless the bag already carries one under any casing. `value` is the hash of a
 * serializer-built body; the default is the empty-body hash.
 */
export function setDefaultContentMd5(headers, value = EMPTY_BODY_CONTENT_MD5) {
    if (headers.get('content-md5') !== undefined)
        return;
    headers.set('Content-MD5', value);
}
//# sourceMappingURL=common.js.map