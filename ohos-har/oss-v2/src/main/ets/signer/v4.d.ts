import type { RequestMessage } from '../transport/types.js';
import type { Signer, SigningContext } from './types.js';
/** V4 signing, in whichever of the two auth modes `context.authHeader` selects. */
export declare class SignerV4 implements Signer {
    sign(request: RequestMessage, context: SigningContext): Promise<void>;
}
