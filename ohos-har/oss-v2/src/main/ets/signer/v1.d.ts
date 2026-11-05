import type { RequestMessage } from '../transport/types.js';
import type { Signer, SigningContext } from './types.js';
/** V1 signing, in whichever of the two auth modes `context.authHeader` selects. */
export declare class SignerV1 implements Signer {
    sign(request: RequestMessage, context: SigningContext): Promise<void>;
}
