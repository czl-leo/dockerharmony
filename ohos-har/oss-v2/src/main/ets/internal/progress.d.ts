import type { ByteContent, HeaderFields } from '../transport/types.js';
import type { ProgressHandler } from '../types.js';
/** Wraps a caller's `ProgressHandler` and tracks the uploaded high-water mark across retries. */
export declare class ProgressObserver {
    private written;
    private lastWritten;
    private readonly inner;
    private readonly total;
    constructor(inner: ProgressHandler, total: number);
    /** Fires `increment` verbatim, even where it straddles the high-water mark. */
    readonly feed: (increment: number) => void;
    readonly reset: () => void;
}
/**
 * The upload total, or `-1` when it cannot be known up front. A declared `Content-Length` wins, then
 * the body's own `length`; an unknown-length stream remains `-1`.
 */
export declare function resolveUploadTotal(body: ByteContent | undefined, headers: HeaderFields): number;
