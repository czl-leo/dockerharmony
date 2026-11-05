import type { Credentials, CredentialsProvider } from './types.js';
/**
 * Caches another provider's credentials and refreshes them near expiry. Credentials without an
 * expiration are fetched once and retained.
 */
export declare class RefreshCredentialsProvider implements CredentialsProvider {
    private readonly provider;
    private readonly thresholdMs;
    private cached?;
    private expiresAt;
    private refreshing?;
    constructor(provider: CredentialsProvider, refreshThresholdSeconds?: number);
    getCredentials(): Promise<Credentials>;
    private refresh;
    private fetch;
}
