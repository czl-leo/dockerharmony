import type { OperationInput, OperationOutput } from '../types.js';
import type { GetBucketVersioningRequest, GetBucketVersioningResult, ListObjectVersionsRequest, ListObjectVersionsResult, PutBucketVersioningRequest, PutBucketVersioningResult } from '../models/bucket-versioning.js';
export declare function serializePutBucketVersioning(request: PutBucketVersioningRequest): OperationInput;
export declare function deserializePutBucketVersioning(output: OperationOutput): Promise<PutBucketVersioningResult>;
export declare function serializeGetBucketVersioning(request: GetBucketVersioningRequest): OperationInput;
export declare function deserializeGetBucketVersioning(output: OperationOutput): Promise<GetBucketVersioningResult>;
export declare function serializeListObjectVersions(request: ListObjectVersionsRequest): OperationInput;
export declare function deserializeListObjectVersions(output: OperationOutput): Promise<ListObjectVersionsResult>;
