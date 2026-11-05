import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { DeleteBucketRequest, DeleteBucketResult, GetBucketInfoRequest, GetBucketInfoResult, GetBucketLocationRequest, GetBucketLocationResult, GetBucketStatRequest, GetBucketStatResult, ListObjectsRequest, ListObjectsResult, ListObjectsV2Request, ListObjectsV2Result, PutBucketRequest, PutBucketResult } from '../models/bucket-basic.js';
/**
 * Lists the objects in a bucket, one page at a time. When the result is truncated, pass its
 * `nextContinuationToken` to the next call.
 */
export declare class ListObjectsV2 implements Command<ListObjectsV2Request, ListObjectsV2Result> {
    readonly opName = "ListObjectsV2";
    readonly input: ListObjectsV2Request;
    constructor(input: ListObjectsV2Request);
    serialize(input: ListObjectsV2Request): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListObjectsV2Result>;
}
/**
 * Lists the objects in a bucket, one page at a time, in the original (V1) style. When the result is
 * truncated, pass its `nextMarker` to the next call. Prefer `ListObjectsV2` for new code.
 */
export declare class ListObjects implements Command<ListObjectsRequest, ListObjectsResult> {
    readonly opName = "ListObjects";
    readonly input: ListObjectsRequest;
    constructor(input: ListObjectsRequest);
    serialize(input: ListObjectsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListObjectsResult>;
}
/** Reads a bucket's configuration: region, endpoints, owner, ACL, encryption, versioning. */
export declare class GetBucketInfo implements Command<GetBucketInfoRequest, GetBucketInfoResult> {
    readonly opName = "GetBucketInfo";
    readonly input: GetBucketInfoRequest;
    constructor(input: GetBucketInfoRequest);
    serialize(input: GetBucketInfoRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketInfoResult>;
}
/** Reads the region a bucket lives in, e.g. `oss-cn-hangzhou`. */
export declare class GetBucketLocation implements Command<GetBucketLocationRequest, GetBucketLocationResult> {
    readonly opName = "GetBucketLocation";
    readonly input: GetBucketLocationRequest;
    constructor(input: GetBucketLocationRequest);
    serialize(input: GetBucketLocationRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketLocationResult>;
}
/** Reads a bucket's storage usage and object counts, broken down by storage class. */
export declare class GetBucketStat implements Command<GetBucketStatRequest, GetBucketStatResult> {
    readonly opName = "GetBucketStat";
    readonly input: GetBucketStatRequest;
    constructor(input: GetBucketStatRequest);
    serialize(input: GetBucketStatRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketStatResult>;
}
/** Creates a bucket. Left unconfigured, OSS creates it `Standard` and `private`, unversioned. */
export declare class PutBucket implements Command<PutBucketRequest, PutBucketResult> {
    readonly opName = "PutBucket";
    readonly input: PutBucketRequest;
    constructor(input: PutBucketRequest);
    serialize(input: PutBucketRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutBucketResult>;
}
/**
 * Deletes a bucket that is already empty. Emptying it is the caller's job: a bucket still holding an
 * object, a version or an unfinished multipart upload comes back 409 `BucketNotEmpty`.
 */
export declare class DeleteBucket implements Command<DeleteBucketRequest, DeleteBucketResult> {
    readonly opName = "DeleteBucket";
    readonly input: DeleteBucketRequest;
    constructor(input: DeleteBucketRequest);
    serialize(input: DeleteBucketRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<DeleteBucketResult>;
}
