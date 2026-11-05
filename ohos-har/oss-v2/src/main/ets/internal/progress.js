/** Wraps a caller's `ProgressHandler` and tracks the uploaded high-water mark across retries. */
export class ProgressObserver {
    constructor(inner, total) {
        this.written = 0;
        this.lastWritten = 0;
        /** Fires `increment` verbatim, even where it straddles the high-water mark. */
        this.feed = (increment) => {
            this.written += increment;
            if (this.written > this.lastWritten)
                this.inner(increment, this.written, this.total);
        };
        this.reset = () => {
            this.lastWritten = this.written;
            this.written = 0;
        };
        this.inner = inner;
        this.total = total;
    }
}
/**
 * The upload total, or `-1` when it cannot be known up front. A declared `Content-Length` wins, then
 * the body's own `length`; an unknown-length stream remains `-1`.
 */
export function resolveUploadTotal(body, headers) {
    const declared = headers.get('content-length');
    if (declared !== undefined && declared !== '') {
        const n = Number(declared);
        if (Number.isFinite(n) && n >= 0)
            return n;
    }
    return body?.length ?? -1;
}
//# sourceMappingURL=progress.js.map