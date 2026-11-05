import type { ErrorRetryable } from './types.js';
/** Retries on the response status: any 5xx, plus 401, 408 and 429. */
export declare class HttpStatusCodeRetryable implements ErrorRetryable {
    isErrorRetryable(error: Error): boolean;
}
/** Retries on the server's error code, whatever status carried it. */
export declare class ServiceErrorCodeRetryable implements ErrorRetryable {
    isErrorRetryable(error: Error): boolean;
}
/** Retries incomplete transport or credentials-provider failures unless the cause chain was canceled. */
export declare class ClientErrorRetryable implements ErrorRetryable {
    isErrorRetryable(error: Error): boolean;
}
/** What the default retryer consults, in order. */
export declare const DEFAULT_ERROR_RETRYABLES: readonly ErrorRetryable[];
