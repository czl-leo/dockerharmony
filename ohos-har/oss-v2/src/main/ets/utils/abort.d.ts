/** The part of `AbortSignal` this SDK uses. */
export interface AbortSignalLike {
    /** Whether cancellation has already been requested. */
    readonly aborted: boolean;
    addEventListener(type: 'abort', listener: () => void): void;
    removeEventListener(type: 'abort', listener: () => void): void;
}
/** Throws `CanceledError` if the signal has already fired. */
export declare function throwIfAborted(signal?: AbortSignalLike): void;
/** Resolves with `promise`, or rejects with `CanceledError` when `signal` fires. */
export declare function raceAbort<T>(promise: Promise<T>, signal: AbortSignalLike): Promise<T>;
