/** How far anything in this SDK follows a `cause` chain. A foreign error can be cyclic. */
export declare const MAX_CAUSE_DEPTH = 8;
/** The base class of every error this SDK throws. */
export declare class OssError extends Error {
    /** The error that caused this one, if any. */
    readonly cause?: Error;
    constructor(message: string, cause?: Error);
}
/** The parsed parts of an error response, as `ServiceError` needs them. */
export interface ServiceErrorFields {
    statusCode: number;
    code: string;
    message: string;
    requestId: string;
    ec: string;
    headers: Record<string, string>;
    hostId?: string;
    timestamp?: Date;
    requestTarget?: string;
    snapshot?: string;
}
/** An error the service returned, as opposed to one raised locally. */
export declare class ServiceError extends OssError {
    /** The HTTP status code of the response. */
    readonly statusCode: number;
    /** The error code the service returned. */
    readonly code: string;
    /** The service's own error message, without the surrounding text `message` adds. */
    readonly errorMessage: string;
    /** The request id of the response, for a support ticket. */
    readonly requestId: string;
    /** The error code extension, which locates the failure more precisely than `code`. */
    readonly ec: string;
    /** The host that the service reported as handling the request. */
    readonly hostId?: string;
    /** The response headers, as the transport reported them. */
    readonly headers: Record<string, string>;
    /** The server's clock, from the response `Date` header. Drives clock-skew correction. */
    readonly timestamp?: Date;
    /** The method and URL of the request that failed. */
    readonly requestTarget?: string;
    /** The error body as decoded text, so a failure whose `code` did not parse is still diagnosable. */
    readonly snapshot?: string;
    constructor(fields: ServiceErrorFields);
}
/** The wrapper every failure of an operation arrives in, naming the operation that failed. */
export declare class OperationError extends OssError {
    /** The name of the operation, such as `PutObject`. */
    readonly opName: string;
    constructor(opName: string, cause: Error);
    /**
     * Walks the `cause` chain and returns the first error `match` accepts, so a caller can reach the
     * `ServiceError` under the wrapper:
     *
     *     const service = err.contains((e) => e instanceof ServiceError)
     *     if (service instanceof ServiceError) { ... }
     *
     * The returned error is typed `Error`, so the narrowing test has to be repeated at the call site.
     */
    contains(match: (error: Error) => boolean): Error | undefined;
}
/** A required field of the request was not set. */
export declare class ParamRequiredError extends OssError {
    /** The name of the field. */
    readonly field: string;
    constructor(field: string);
}
/** A field of the request was set to a value the SDK rejects before sending. */
export declare class ParamInvalidError extends OssError {
    /** The name of the field. */
    readonly field: string;
    constructor(field: string);
}
/** The request could not be built. */
export declare class SerializationError extends OssError {
    constructor(message: string, cause?: Error);
}
/** The response arrived but could not be read into a result. */
export declare class DeserializationError extends OssError {
    constructor(message: string, cause?: Error);
}
/** The credentials provider failed, or returned credentials with no key. */
export declare class CredentialsError extends OssError {
    constructor(message: string, cause?: Error);
}
/**
 * The request never produced a response. The retryer retries this by type, so a transport must report
 * a failure worth another attempt as one; anything else it throws goes back untouched and is not
 * retried.
 */
export declare class RequestError extends OssError {
    constructor(message: string, cause?: Error);
}
/** The caller's `AbortSignal` fired. Never retried. */
export declare class CanceledError extends OssError {
    constructor();
}
/** The current runtime cannot provide the requested SDK capability. */
export declare class NotSupportedError extends OssError {
    constructor(capability: string);
}
