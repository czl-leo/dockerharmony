import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { GetBucketVersioningRequest, GetBucketVersioningResult, ListObjectVersionsRequest, ListObjectVersionsResult, PutBucketVersioningRequest, PutBucketVersioningResult } from '../models/bucket-versioning.js';
/** Sets the versioning state of a bucket. Valid states: Enabled, Suspended. */
export declare class PutBucketVersioning implements Command<PutBucketVersioningRequest, PutBucketVersioningResult> {
    readonly opName = "PutBucketVersioning";
    readonly input: PutBucketVersioningRequest;
    constructor(input: PutBucketVersioningRequest);
    serialize(input: PutBucketVersioningRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutBucketVersioningResult>;
}
/** Reads the versioning state of a bucket. */
export declare class GetBucketVersioning implements Command<GetBucketVersioningRequest, GetBucketVersioningResult> {
    readonly opName = "GetBucketVersioning";
    readonly input: GetBucketVersioningRequest;
    constructor(input: GetBucketVersioningRequest);
    serialize(input: GetBucketVersioningRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketVersioningResult>;
}
/** Lists the versions of the objects in a bucket, including delete markers. */
export declare class ListObjectVersions implements Command<ListObjectVersionsRequest, ListObjectVersionsResult> {
    readonly opName = "ListObjectVersions";
    readonly input: ListObjectVersionsRequest;
    constructor(input: ListObjectVersionsRequest);
    serialize(input: ListObjectVersionsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListObjectVersionsResult>;
}
