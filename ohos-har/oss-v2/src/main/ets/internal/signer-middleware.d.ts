import type { ExecuteContext } from './execute-context.js';
import type { CredentialsProvider } from '../credentials/types.js';
import type { Logger } from '../log/logger.js';
import type { Signer } from '../signer/types.js';
import type { RequestMessage, ResponseMessage } from '../transport/types.js';
import type { ExecuteMiddleware } from './execute-middleware.js';
/** Fetches credentials, signs the request, and forwards it. */
export declare class SignerMiddleware implements ExecuteMiddleware {
    private readonly next;
    private readonly signer;
    private readonly provider?;
    private readonly logger?;
    constructor(next: ExecuteMiddleware, signer: Signer, provider?: CredentialsProvider, logger?: Logger);
    execute(request: RequestMessage, context: ExecuteContext): Promise<ResponseMessage>;
}
