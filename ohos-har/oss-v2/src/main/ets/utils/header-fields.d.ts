import type { HeaderFields } from '../transport/types.js';
/** Builds a fresh `HeaderFields`, copied from a record's own spellings. */
export declare function createHeaderFields(init?: Record<string, string>): HeaderFields;
/** True when `headers` is a built `HeaderFields` rather than a plain record. */
export declare function isHeaderFields(headers?: Record<string, string> | HeaderFields): headers is HeaderFields;
