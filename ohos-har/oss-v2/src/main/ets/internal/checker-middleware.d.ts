import type { ExecuteContext } from './execute-context.js';
import type { Logger } from '../log/logger.js';
import type { RequestMessage, ResponseMessage } from '../transport/types.js';
import type { ExecuteMiddleware } from './execute-middleware.js';
/** Turns a non-2xx response into a `ServiceError` and fires the caller's response handlers. */
export declare class ResponseCheckerMiddleware implements ExecuteMiddleware {
    private readonly next;
    private readonly logger?;
    constructor(next: ExecuteMiddleware, logger?: Logger);
    /**
     * Checks status before running handlers. Handlers run only for 2xx responses, including 203, and a
     * handler that throws fails the request.
     */
    execute(request: RequestMessage, context: ExecuteContext): Promise<ResponseMessage>;
}
