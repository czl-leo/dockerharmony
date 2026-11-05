import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { GetBucketAclRequest, GetBucketAclResult, PutBucketAclRequest, PutBucketAclResult } from '../models/bucket-acl.js';
/** Sets a bucket's ACL. Valid values: private, public-read, public-read-write. */
export declare class PutBucketAcl implements Command<PutBucketAclRequest, PutBucketAclResult> {
    readonly opName = "PutBucketAcl";
    readonly input: PutBucketAclRequest;
    constructor(input: PutBucketAclRequest);
    serialize(input: PutBucketAclRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutBucketAclResult>;
}
/** Reads a bucket's ACL and owner. */
export declare class GetBucketAcl implements Command<GetBucketAclRequest, GetBucketAclResult> {
    readonly opName = "GetBucketAcl";
    readonly input: GetBucketAclRequest;
    constructor(input: GetBucketAclRequest);
    serialize(input: GetBucketAclRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketAclResult>;
}
