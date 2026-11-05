import { FullJitterBackoff } from './backoff.js';
import { DEFAULT_ERROR_RETRYABLES } from './retryable.js';
export const DEFAULT_MAX_ATTEMPTS = 3;
export const DEFAULT_MAX_BACKOFF_MS = 20000;
export const DEFAULT_BASE_DELAY_MS = 200;
function positiveOr(value, fallback) {
    return value !== undefined && value > 0 ? value : fallback;
}
/** The default retryer: three attempts, full-jitter backoff, the default set of retryable errors. */
export class StandardRetryer {
    constructor(options = {}) {
        const baseDelayMs = positiveOr(options.baseDelayMs, DEFAULT_BASE_DELAY_MS);
        const maxBackoffMs = positiveOr(options.maxBackoffMs, DEFAULT_MAX_BACKOFF_MS);
        this.attempts = positiveOr(options.maxAttempts, DEFAULT_MAX_ATTEMPTS);
        this.retryables = options.errorRetryables ?? DEFAULT_ERROR_RETRYABLES;
        this.backoff = options.backoff ?? new FullJitterBackoff(baseDelayMs, maxBackoffMs, options.random);
    }
    maxAttempts() {
        return this.attempts;
    }
    isErrorRetryable(error) {
        for (const retryable of this.retryables) {
            if (retryable.isErrorRetryable(error))
                return true;
        }
        return false;
    }
    retryDelay(attempt, error) {
        return this.backoff.backoffDelay(attempt, error);
    }
}
/** Disables retry. */
export class NopRetryer {
    maxAttempts() {
        return 1;
    }
    isErrorRetryable(_error) {
        return false;
    }
    /** Returns 0. */
    retryDelay(_attempt, _error) {
        return 0;
    }
}
//# sourceMappingURL=standard.js.map