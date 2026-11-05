import type { ByteContent, ByteSource, RequestBody } from './types.js';
/** Options shared by every one-shot stream body. `length` is the declared byte count. */
export interface StreamBodyOptions {
    length?: number;
}
/** A `Uint8Array` body. Replayable: every cursor re-reads the same bytes. */
export declare class BytesContent implements ByteContent {
    readonly length: number;
    readonly oneShot = false;
    /** The whole payload, materialized. */
    readonly bytes: Uint8Array;
    constructor(bytes: Uint8Array);
    source(): ByteSource;
}
/** A `string` body, measured and emitted as UTF-8. Replayable. */
export declare class StringContent implements ByteContent {
    readonly length: number;
    readonly oneShot = false;
    /** The UTF-8 encoding of the string, materialized once at construction. */
    readonly bytes: Uint8Array;
    constructor(text: string);
    source(): ByteSource;
}
/**
 * A one-shot stream body. `source()` hands back the single underlying cursor, so it can be read only
 * once; `oneShot` is therefore always `true` and a failed attempt cannot be retried. `length` is
 * whatever the caller declared, or `undefined` for chunked transfer.
 */
export declare class StreamContent implements ByteContent {
    readonly length: number | undefined;
    readonly oneShot = true;
    private readonly cursor;
    constructor(source: ByteSource, options?: StreamBodyOptions);
    source(): ByteSource;
}
/** Wraps a `Uint8Array` as a replayable body. */
export declare function bytesBody(bytes: Uint8Array): BytesContent;
/** Wraps a `string` as a replayable UTF-8 body. */
export declare function stringBody(text: string): StringContent;
/** Wraps an already-normalized `ByteSource` as a one-shot body. */
export declare function streamBody(source: ByteSource, options?: StreamBodyOptions): StreamContent;
/** Normalizes a `RequestBody` to `ByteContent`; existing `ByteContent` passes through unchanged. */
export declare function toByteContent(body: RequestBody | undefined): ByteContent | undefined;
