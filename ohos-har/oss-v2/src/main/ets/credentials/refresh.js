const DEFAULT_REFRESH_THRESHOLD_SECONDS = 300;
/**
 * Caches another provider's credentials and refreshes them near expiry. Credentials without an
 * expiration are fetched once and retained.
 */
export class RefreshCredentialsProvider {
    constructor(provider, refreshThresholdSeconds = DEFAULT_REFRESH_THRESHOLD_SECONDS) {
        this.expiresAt = 0;
        this.provider = provider;
        this.thresholdMs = refreshThresholdSeconds * 1000;
    }
    getCredentials() {
        const now = Date.now();
        if (this.cached === undefined || now >= this.expiresAt)
            return this.refresh();
        // Within the threshold, return the cached value and refresh in the background.
        if (now >= this.expiresAt - this.thresholdMs)
            void this.refresh().catch(() => undefined);
        return Promise.resolve(this.cached);
    }
    refresh() {
        if (this.refreshing === undefined)
            this.refreshing = this.fetch();
        return this.refreshing;
    }
    async fetch() {
        try {
            const credentials = await this.provider.getCredentials();
            this.cached = credentials;
            this.expiresAt =
                credentials.expiration === undefined ? Number.POSITIVE_INFINITY : credentials.expiration.getTime();
            return credentials;
        }
        finally {
            this.refreshing = undefined;
        }
    }
}
//# sourceMappingURL=refresh.js.map