import type { OperationInput, OperationOutput } from '../types.js';
import type { GetObjectAclRequest, GetObjectAclResult, PutObjectAclRequest, PutObjectAclResult } from '../models/object-acl.js';
export declare function serializePutObjectAcl(request: PutObjectAclRequest): OperationInput;
export declare function deserializePutObjectAcl(output: OperationOutput): Promise<PutObjectAclResult>;
export declare function serializeGetObjectAcl(request: GetObjectAclRequest): OperationInput;
export declare function deserializeGetObjectAcl(output: OperationOutput): Promise<GetObjectAclResult>;
