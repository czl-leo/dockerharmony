import type { OperationInput, OperationOutput } from '../types.js';
import type { GetBucketAclRequest, GetBucketAclResult, PutBucketAclRequest, PutBucketAclResult } from '../models/bucket-acl.js';
export declare function serializePutBucketAcl(request: PutBucketAclRequest): OperationInput;
export declare function deserializePutBucketAcl(output: OperationOutput): Promise<PutBucketAclResult>;
export declare function serializeGetBucketAcl(request: GetBucketAclRequest): OperationInput;
export declare function deserializeGetBucketAcl(output: OperationOutput): Promise<GetBucketAclResult>;
