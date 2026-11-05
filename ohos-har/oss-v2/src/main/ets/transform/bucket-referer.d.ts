import type { OperationInput, OperationOutput } from '../types.js';
import type { GetBucketRefererRequest, GetBucketRefererResult, PutBucketRefererRequest, PutBucketRefererResult } from '../models/bucket-referer.js';
export declare function serializePutBucketReferer(request: PutBucketRefererRequest): OperationInput;
export declare function deserializePutBucketReferer(output: OperationOutput): Promise<PutBucketRefererResult>;
export declare function serializeGetBucketReferer(request: GetBucketRefererRequest): OperationInput;
export declare function deserializeGetBucketReferer(output: OperationOutput): Promise<GetBucketRefererResult>;
