import { AnonymousCredentialsProvider } from '../credentials/anonymous.js';
import { hasKeys } from '../credentials/types.js';
import { CredentialsError, OssError, ParamRequiredError } from '../error/types.js';
/** Fetches credentials, signs the request, and forwards it. */
export class SignerMiddleware {
    constructor(next, signer, provider, logger) {
        this.next = next;
        this.signer = signer;
        this.provider = provider;
        this.logger = logger;
    }
    async execute(request, context) {
        const provider = this.provider;
        if (provider === undefined)
            throw new ParamRequiredError('Config.credentialsProvider');
        if (provider instanceof AnonymousCredentialsProvider) {
            return await this.next.execute(request, context);
        }
        let credentials;
        try {
            credentials = await provider.getCredentials();
        }
        catch (err) {
            throw new CredentialsError('failed to fetch credentials from the provider', err instanceof Error ? err : new OssError('the credentials provider threw a value that was not an Error'));
        }
        if (!hasKeys(credentials)) {
            throw new CredentialsError('the credentials provider returned credentials with no access key id or secret');
        }
        const signingContext = context.signingContext;
        signingContext.credentials = credentials;
        await this.signer.sign(request, signingContext);
        this.logger?.debug('stringToSign:\n' + signingContext.stringToSign);
        return await this.next.execute(request, context);
    }
}
//# sourceMappingURL=signer-middleware.js.map