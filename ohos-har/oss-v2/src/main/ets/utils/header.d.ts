import type { HeaderFields } from '../transport/types.js';
/**
 * The canonicalized-header block both signers sign: accepted names sorted, one `name:value\n` line
 * each, every value trimmed. Sorts by name, not by the assembled line.
 */
export declare function canonicalizedHeaders(fields: HeaderFields, accept: (lower: string) => boolean): string;
