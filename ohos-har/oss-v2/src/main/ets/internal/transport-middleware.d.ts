import type { ExecuteContext } from './execute-context.js';
import type { RequestMessage, ResponseMessage, HttpTransport } from '../transport/types.js';
import type { ExecuteMiddleware } from './execute-middleware.js';
export declare const missingTransport: HttpTransport;
/** The terminal middleware and the only one that touches the platform. */
export declare class TransportMiddleware implements ExecuteMiddleware {
    private readonly transport;
    constructor(transport: HttpTransport);
    execute(request: RequestMessage, context: ExecuteContext): Promise<ResponseMessage>;
}
