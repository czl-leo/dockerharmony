import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { GetObjectAclRequest, GetObjectAclResult, PutObjectAclRequest, PutObjectAclResult } from '../models/object-acl.js';
/** Sets the ACL of an object. */
export declare class PutObjectAcl implements Command<PutObjectAclRequest, PutObjectAclResult> {
    readonly opName = "PutObjectAcl";
    readonly input: PutObjectAclRequest;
    constructor(input: PutObjectAclRequest);
    serialize(input: PutObjectAclRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutObjectAclResult>;
}
/** Reads the ACL of an object. */
export declare class GetObjectAcl implements Command<GetObjectAclRequest, GetObjectAclResult> {
    readonly opName = "GetObjectAcl";
    readonly input: GetObjectAclRequest;
    constructor(input: GetObjectAclRequest);
    serialize(input: GetObjectAclRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetObjectAclResult>;
}
