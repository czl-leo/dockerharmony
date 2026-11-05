import type { OperationInput, OperationOutput } from '../types.js';
import type { AsyncProcessObjectRequest, AsyncProcessObjectResult, ProcessObjectRequest, ProcessObjectResult } from '../models/object-process.js';
export declare function serializeProcessObject(request: ProcessObjectRequest): OperationInput;
export declare function deserializeProcessObject(output: OperationOutput): Promise<ProcessObjectResult>;
export declare function serializeAsyncProcessObject(request: AsyncProcessObjectRequest): OperationInput;
export declare function deserializeAsyncProcessObject(output: OperationOutput): Promise<AsyncProcessObjectResult>;
