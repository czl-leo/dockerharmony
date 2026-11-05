import { utf8Encode } from '../utils/bytes.js';
/** A cursor that yields one materialized chunk and then reports end-of-stream. */
function singleChunkSource(chunk) {
    let sent = false;
    return {
        read() {
            if (sent)
                return Promise.resolve(null);
            sent = true;
            // A zero-length payload returns `null`.
            return Promise.resolve(chunk.byteLength > 0 ? chunk : null);
        },
    };
}
/** A `Uint8Array` body. Replayable: every cursor re-reads the same bytes. */
export class BytesContent {
    constructor(bytes) {
        this.oneShot = false;
        this.bytes = bytes;
        this.length = bytes.byteLength;
    }
    source() {
        return singleChunkSource(this.bytes);
    }
}
/** A `string` body, measured and emitted as UTF-8. Replayable. */
export class StringContent {
    constructor(text) {
        this.oneShot = false;
        this.bytes = utf8Encode(text);
        this.length = this.bytes.byteLength;
    }
    source() {
        return singleChunkSource(this.bytes);
    }
}
/**
 * A one-shot stream body. `source()` hands back the single underlying cursor, so it can be read only
 * once; `oneShot` is therefore always `true` and a failed attempt cannot be retried. `length` is
 * whatever the caller declared, or `undefined` for chunked transfer.
 */
export class StreamContent {
    constructor(source, options) {
        this.oneShot = true;
        this.cursor = source;
        this.length = options?.length;
    }
    source() {
        return this.cursor;
    }
}
/** Wraps a `Uint8Array` as a replayable body. */
export function bytesBody(bytes) {
    return new BytesContent(bytes);
}
/** Wraps a `string` as a replayable UTF-8 body. */
export function stringBody(text) {
    return new StringContent(text);
}
/** Wraps an already-normalized `ByteSource` as a one-shot body. */
export function streamBody(source, options) {
    return new StreamContent(source, options);
}
/** Normalizes a `RequestBody` to `ByteContent`; existing `ByteContent` passes through unchanged. */
export function toByteContent(body) {
    if (body === undefined)
        return undefined;
    if (typeof body === 'string')
        return new StringContent(body);
    if (body instanceof Uint8Array)
        return new BytesContent(body);
    return body;
}
//# sourceMappingURL=content.js.map