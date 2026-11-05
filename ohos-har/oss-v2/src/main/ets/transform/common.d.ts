import type { ResultModel } from '../models/common.js';
import type { HeaderFields } from '../transport/types.js';
import type { OperationOutput } from '../types.js';
export declare function resultCommon(output: OperationOutput): ResultModel;
/** Collects `x-oss-meta-*` from an already-lowercased header map, prefix removed. */
export declare function userMetadata(headers: Record<string, string>): Record<string, string> | undefined;
/** Writes the caller's metadata as `x-oss-meta-*` headers. */
export declare function applyUserMetadata(headers: HeaderFields, metadata?: Record<string, string>): void;
/** Returns `undefined` for a missing, blank or non-finite value. */
export declare function toNumber(value?: string): number | undefined;
export declare function toDate(value?: string): Date | undefined;
export declare function toBoolean(value?: string): boolean | undefined;
/** Asserts a required modelled field was supplied. */
export declare function requireField<T>(value: T | undefined, field: string): T;
/** Query-parameter setters. Parameter names are case-sensitive. */
export declare function setString(target: Record<string, string>, name: string, value?: string): void;
export declare function setNumber(target: Record<string, string>, name: string, value?: number): void;
export declare function setBoolean(target: Record<string, string>, name: string, value?: boolean): void;
/** The header setters, writing through the case-insensitive `HeaderFields`. */
export declare function setHeaderString(headers: HeaderFields, name: string, value?: string): void;
export declare function setHeaderNumber(headers: HeaderFields, name: string, value?: number): void;
export declare function setHeaderBoolean(headers: HeaderFields, name: string, value?: boolean): void;
/** Writes a fixed `Content-Type` when none is set. */
export declare function setContentTypeIfAbsent(headers: HeaderFields, value: string): void;
/**
 * Writes `Content-MD5` unless the bag already carries one under any casing. `value` is the hash of a
 * serializer-built body; the default is the empty-body hash.
 */
export declare function setDefaultContentMd5(headers: HeaderFields, value?: string): void;
