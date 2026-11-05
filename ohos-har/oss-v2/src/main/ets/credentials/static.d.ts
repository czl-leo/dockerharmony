import type { Credentials, CredentialsProvider } from './types.js';
/** A fixed pair of keys, optionally with an STS token. */
export declare class StaticCredentialsProvider implements CredentialsProvider {
    private readonly credentials;
    constructor(accessKeyId: string, accessKeySecret: string, securityToken?: string);
    getCredentials(): Promise<Credentials>;
}
