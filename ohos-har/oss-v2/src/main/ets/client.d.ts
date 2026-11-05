import type { Config } from './config.js';
import type { GetObjectRequest, GetObjectResult, PutObjectRequest, PutObjectResult } from './models/object-basic.js';
import type { ClientOptionsFn, Command, OperationInput, OperationOutput, OperationOptions, Paginator, Presignable, PresignOptions, PresignResult } from './types.js';
/** The client every operation is sent through. Create one and reuse it. */
export declare class Client {
    private readonly impl;
    /** Applies each `ClientOptionsFn` in order. Configuration errors are reported on the first call. */
    constructor(config: Config, ...fns: ClientOptionsFn[]);
    /** Runs an operation the SDK does not model, signed and retried like any other. */
    invokeOperation(input: OperationInput, options?: OperationOptions): Promise<OperationOutput>;
    /**
     * Runs one operation and returns its result. A failure arrives as an `OperationError` naming the
     * operation, with the cause under it -- or, for a value rejected before anything is sent, as the
     * `ParamRequiredError` or `ParamInvalidError` itself.
     */
    send<I, O>(command: Command<I, O>, options?: OperationOptions): Promise<O>;
    /**
     * Signs one operation into a URL that carries it on its own, and sends nothing. Only a command that
     * implements `Presignable` can be presigned; a V4 URL may not outlive seven days.
     */
    presign<I, O>(command: Presignable<I, O>, options?: PresignOptions): Promise<PresignResult>;
    /**
     * Walks a list operation page by page, yielding each result. Consume it with `for await`. Only a
     * paginator from `src/paginator` can be passed; each page is a `client.send`, so a failure arrives
     * exactly as it would from a direct call.
     */
    paginate<O>(paginator: Paginator<O>, options?: OperationOptions): AsyncGenerator<O>;
    /** Returns whether an object exists. A missing bucket or every error other than a missing key is rethrown. */
    isObjectExist(bucket: string, key: string, options?: OperationOptions): Promise<boolean>;
    /** Returns whether a bucket exists. A service response other than `NoSuchBucket` establishes that it exists. */
    isBucketExist(bucket: string, options?: OperationOptions): Promise<boolean>;
    /** Uploads the file at `path` as an object where the current runtime supports local files. */
    putObjectFromFile(request: PutObjectRequest, path: string, options?: OperationOptions): Promise<PutObjectResult>;
    /** Downloads an object into `path` where the current runtime supports local files. */
    getObjectToFile(request: GetObjectRequest, path: string, options?: OperationOptions): Promise<GetObjectResult>;
}
