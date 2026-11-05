import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { AsyncProcessObjectRequest, AsyncProcessObjectResult, ProcessObjectRequest, ProcessObjectResult } from '../models/object-process.js';
/** Processes an object and stores the result as a new object. */
export declare class ProcessObject implements Command<ProcessObjectRequest, ProcessObjectResult> {
    readonly opName = "ProcessObject";
    readonly input: ProcessObjectRequest;
    constructor(input: ProcessObjectRequest);
    serialize(input: ProcessObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ProcessObjectResult>;
}
/** Submits an asynchronous media or image processing task. */
export declare class AsyncProcessObject implements Command<AsyncProcessObjectRequest, AsyncProcessObjectResult> {
    readonly opName = "AsyncProcessObject";
    readonly input: AsyncProcessObjectRequest;
    constructor(input: AsyncProcessObjectRequest);
    serialize(input: AsyncProcessObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<AsyncProcessObjectResult>;
}
