import type { Credentials } from '../credentials/types.js';
import type { RequestMessage } from '../transport/types.js';
/** How long a query-mode signature lasts when the caller named no expiry. */
export declare const DEFAULT_EXPIRATION_MS: number;
/** The set the server signs without being told to. */
export declare function isDefaultSignedHeader(lower: string): boolean;
/** Signing inputs and outputs. */
export interface SigningContext {
    bucket?: string;
    key?: string;
    region?: string;
    product?: string;
    additionalHeaderNames?: string[];
    subResource?: string[];
    credentials?: Credentials;
    /** Signing time. Defaults to the local clock and is written back by the signer. */
    signTime?: Date;
    /** Milliseconds to add to the local clock, written by the retryer after RequestTimeTooSkewed. */
    clockOffset?: number;
    /** true signs into the `Authorization` header; false signs into the query string. */
    authHeader: boolean;
    /** Query mode only: when the signature stops being valid. Defaulted and written back by the signer. */
    expirationTime?: Date;
    stringToSign: string;
    dateToSign: string;
    scopeToSign: string;
    additionalHeadersToSign: string;
    /** The canonical request populated by V4 signing. */
    canonicalRequest?: string;
}
/** Signs a request in place. */
export interface Signer {
    /** Rejects with `ParamInvalidError` when credentials are absent or contain an empty key. */
    sign(request: RequestMessage, context: SigningContext): Promise<void>;
}
