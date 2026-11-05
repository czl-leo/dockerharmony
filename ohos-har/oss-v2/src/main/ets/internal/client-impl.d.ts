import type { Config } from '../config.js';
import { ExecuteStack } from './execute-stack.js';
import { UrlStyleType } from '../types.js';
import type { ClientOptions, ClientOptionsFn, OperationInput, OperationOutput, OperationOptions, OperationInnerOptions, PresignOptions, PresignResult } from '../types.js';
import type { ParsedEndpoint } from '../utils/endpoint.js';
/** What the client derives from the resolved options, and what it learns while running. */
interface InnerOptions {
    userAgent: string;
    /** Absent when `ClientOptions.endpoint` is empty or unusable; `verifyOperation` reports which. */
    endpoint?: ParsedEndpoint;
    /** `ClientOptions.urlStyle` with the IP-endpoint override applied. */
    urlStyle: UrlStyleType;
    /** Learned from a RequestTimeTooSkewed correction and reused by later requests. */
    clockOffset: number;
    stack: ExecuteStack;
}
/**
 * Resolves the config, holds the chain, and turns one `OperationInput` into one `OperationOutput`. It
 * knows nothing of operations or their models: serializing one is `Client`'s.
 */
export declare class ClientImpl {
    readonly options: ClientOptions;
    readonly innerOptions: InnerOptions;
    /** Resolves options, applies `ClientOptionsFn` entries in order, and builds without validation. */
    constructor(config: Config, fns: readonly ClientOptionsFn[]);
    /** Sends one envelope through the middleware chain. The only per-request entry point there is. */
    invokeOperation(input: OperationInput, options?: OperationOptions, innerOptions?: OperationInnerOptions): Promise<OperationOutput>;
    /** Signs one envelope into a URL and returns without sending it. */
    presignOperation(input: OperationInput, options?: PresignOptions): Promise<PresignResult>;
    /** Validates client options and operation input on every call and returns the parsed endpoint. */
    private verifyOperation;
    private buildRequest;
    /** Completes an upload's serializer marker while the feature is enabled. */
    private addDetectedContentType;
    private buildContext;
    /** Stores the corrected clock offset for later operations. */
    private captureClockOffset;
}
export {};
