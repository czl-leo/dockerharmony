import { ParamRequiredError } from '../error/types.js';
/** A fixed pair of keys, optionally with an STS token. */
export class StaticCredentialsProvider {
    constructor(accessKeyId, accessKeySecret, securityToken) {
        if (accessKeyId.length === 0)
            throw new ParamRequiredError('accessKeyId');
        if (accessKeySecret.length === 0)
            throw new ParamRequiredError('accessKeySecret');
        // An empty token is normalised to absent.
        const token = securityToken !== undefined && securityToken.length > 0 ? securityToken : undefined;
        this.credentials = { accessKeyId, accessKeySecret, securityToken: token };
    }
    getCredentials() {
        return Promise.resolve(this.credentials);
    }
}
//# sourceMappingURL=static.js.map