import type { BackoffDelayer, RandomSource } from './types.js';
/** `[0, 1) * min(baseDelay * 2^attempt, maxBackoff)`. */
export declare class FullJitterBackoff implements BackoffDelayer {
    private readonly baseDelayMs;
    private readonly maxBackoffMs;
    private readonly random;
    constructor(baseDelayMs: number, maxBackoffMs: number, random?: RandomSource);
    backoffDelay(attempt: number, _error: Error): number;
}
/** The same delay on every attempt, for a flat retry cadence. */
export declare class FixedDelayBackoff implements BackoffDelayer {
    private readonly fixedDelayMs;
    constructor(fixedDelayMs: number);
    backoffDelay(_attempt: number, _error: Error): number;
}
