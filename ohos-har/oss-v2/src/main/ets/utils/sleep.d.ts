/**
 * Resolves after roughly `delayMs`. Used by the retry backoff.
 *
 * A pending timer keeps a Node event loop alive for its duration, which a backoff needs: the process
 * must not exit mid-wait.
 */
export declare function sleep(delayMs: number): Promise<void>;
