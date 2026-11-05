/** `[0, 1) * min(baseDelay * 2^attempt, maxBackoff)`. */
export class FullJitterBackoff {
    constructor(baseDelayMs, maxBackoffMs, random) {
        this.baseDelayMs = baseDelayMs;
        this.maxBackoffMs = maxBackoffMs;
        this.random = random ?? Math.random;
    }
    backoffDelay(attempt, _error) {
        const ceiling = Math.min(this.baseDelayMs * Math.pow(2, attempt), this.maxBackoffMs);
        return this.random() * ceiling;
    }
}
/** The same delay on every attempt, for a flat retry cadence. */
export class FixedDelayBackoff {
    constructor(fixedDelayMs) {
        this.fixedDelayMs = fixedDelayMs;
    }
    backoffDelay(_attempt, _error) {
        return this.fixedDelayMs;
    }
}
//# sourceMappingURL=backoff.js.map