import type { BackoffDelayer, ErrorRetryable, RandomSource, Retryer } from './types.js';
export declare const DEFAULT_MAX_ATTEMPTS = 3;
export declare const DEFAULT_MAX_BACKOFF_MS = 20000;
export declare const DEFAULT_BASE_DELAY_MS = 200;
export interface RetryOptions {
    /** The total number of attempts, the first one included. */
    maxAttempts?: number;
    /** The ceiling on a single backoff delay, in milliseconds. */
    maxBackoffMs?: number;
    /** The delay the backoff grows from, in milliseconds. */
    baseDelayMs?: number;
    /** How long to wait between attempts. */
    backoff?: BackoffDelayer;
    /** Which errors to retry. An empty array disables retry rather than restoring the defaults. */
    errorRetryables?: readonly ErrorRetryable[];
    /** Where the jitter draws from. Only consulted when `backoff` is not supplied. */
    random?: RandomSource;
}
/** The default retryer: three attempts, full-jitter backoff, the default set of retryable errors. */
export declare class StandardRetryer implements Retryer {
    private readonly attempts;
    private readonly retryables;
    private readonly backoff;
    constructor(options?: RetryOptions);
    maxAttempts(): number;
    isErrorRetryable(error: Error): boolean;
    retryDelay(attempt: number, error: Error): number;
}
/** Disables retry. */
export declare class NopRetryer implements Retryer {
    maxAttempts(): number;
    isErrorRetryable(_error: Error): boolean;
    /** Returns 0. */
    retryDelay(_attempt: number, _error: Error): number;
}
