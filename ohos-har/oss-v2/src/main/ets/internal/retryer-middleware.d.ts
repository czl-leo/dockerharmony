import type { ExecuteContext } from './execute-context.js';
import type { Logger } from '../log/logger.js';
import type { Retryer } from '../retry/types.js';
import type { RequestMessage, ResponseMessage } from '../transport/types.js';
import type { ExecuteMiddleware } from './execute-middleware.js';
/**
 * Retries the chain below it. Attempts are numbered from 1. Replayable bodies are re-read by the
 * transport, while a one-shot body prevents a second attempt.
 */
export declare class RetryerMiddleware implements ExecuteMiddleware {
    private readonly next;
    private readonly retryer;
    private readonly logger?;
    constructor(next: ExecuteMiddleware, retryer: Retryer, logger?: Logger);
    execute(request: RequestMessage, context: ExecuteContext): Promise<ResponseMessage>;
    /** Waits with abort support. */
    private wait;
    /**
     * Records the offset between the server response `Date` and the signing time for the next attempt.
     * A missing or unparseable timestamp does not update the offset.
     */
    private correctClockSkew;
}
