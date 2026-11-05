import type { Command, OperationInput, OperationOutput, Presignable } from '../types.js';
import type { AppendObjectRequest, AppendObjectResult, CleanRestoredObjectRequest, CleanRestoredObjectResult, CopyObjectRequest, CopyObjectResult, DeleteMultipleObjectsRequest, DeleteMultipleObjectsResult, DeleteObjectRequest, DeleteObjectResult, GetObjectMetaRequest, GetObjectMetaResult, GetObjectRequest, GetObjectResult, HeadObjectRequest, HeadObjectResult, PutObjectRequest, PutObjectResult, RestoreObjectRequest, RestoreObjectResult } from '../models/object-basic.js';
/** Uploads an object. */
export declare class PutObject implements Presignable<PutObjectRequest, PutObjectResult> {
    readonly opName = "PutObject";
    readonly input: PutObjectRequest;
    constructor(input: PutObjectRequest);
    serialize(input: PutObjectRequest): Promise<OperationInput>;
    serializePresign(input: PutObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutObjectResult>;
}
/** Downloads an object. */
export declare class GetObject implements Presignable<GetObjectRequest, GetObjectResult> {
    readonly opName = "GetObject";
    readonly input: GetObjectRequest;
    constructor(input: GetObjectRequest);
    serialize(input: GetObjectRequest): Promise<OperationInput>;
    /** The SDK adds nothing of its own to a download, so the presigned request is the same one. */
    serializePresign(input: GetObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetObjectResult>;
}
/** Queries the metadata of an object, without returning its content. */
export declare class HeadObject implements Presignable<HeadObjectRequest, HeadObjectResult> {
    readonly opName = "HeadObject";
    readonly input: HeadObjectRequest;
    constructor(input: HeadObjectRequest);
    serialize(input: HeadObjectRequest): Promise<OperationInput>;
    /** The SDK adds nothing of its own to a head, so the presigned request is the same one. */
    serializePresign(input: HeadObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<HeadObjectResult>;
}
/**
 * Deletes an object. Deleting a key that does not exist is a success, not a `NoSuchKey`: OSS
 * answers 204 whether or not the key was there.
 */
export declare class DeleteObject implements Command<DeleteObjectRequest, DeleteObjectResult> {
    readonly opName = "DeleteObject";
    readonly input: DeleteObjectRequest;
    constructor(input: DeleteObjectRequest);
    serialize(input: DeleteObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<DeleteObjectResult>;
}
/** Copies an object within OSS, without downloading and re-uploading it. */
export declare class CopyObject implements Command<CopyObjectRequest, CopyObjectResult> {
    readonly opName = "CopyObject";
    readonly input: CopyObjectRequest;
    constructor(input: CopyObjectRequest);
    serialize(input: CopyObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<CopyObjectResult>;
}
/** Appends data to the end of an appendable object, creating it on the first append at position 0. */
export declare class AppendObject implements Command<AppendObjectRequest, AppendObjectResult> {
    readonly opName = "AppendObject";
    readonly input: AppendObjectRequest;
    constructor(input: AppendObjectRequest);
    serialize(input: AppendObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<AppendObjectResult>;
}
/** Deletes multiple objects in one request. */
export declare class DeleteMultipleObjects implements Command<DeleteMultipleObjectsRequest, DeleteMultipleObjectsResult> {
    readonly opName = "DeleteMultipleObjects";
    readonly input: DeleteMultipleObjectsRequest;
    constructor(input: DeleteMultipleObjectsRequest);
    serialize(input: DeleteMultipleObjectsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<DeleteMultipleObjectsResult>;
}
/** Queries a small fixed set of object metadata, without the stored user metadata a HEAD returns. */
export declare class GetObjectMeta implements Command<GetObjectMetaRequest, GetObjectMetaResult> {
    readonly opName = "GetObjectMeta";
    readonly input: GetObjectMetaRequest;
    constructor(input: GetObjectMetaRequest);
    serialize(input: GetObjectMetaRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetObjectMetaResult>;
}
/** Restores an Archive or Cold Archive object into a readable state. */
export declare class RestoreObject implements Command<RestoreObjectRequest, RestoreObjectResult> {
    readonly opName = "RestoreObject";
    readonly input: RestoreObjectRequest;
    constructor(input: RestoreObjectRequest);
    serialize(input: RestoreObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<RestoreObjectResult>;
}
/** Discards the readable copy created by RestoreObject ahead of its expiry. */
export declare class CleanRestoredObject implements Command<CleanRestoredObjectRequest, CleanRestoredObjectResult> {
    readonly opName = "CleanRestoredObject";
    readonly input: CleanRestoredObjectRequest;
    constructor(input: CleanRestoredObjectRequest);
    serialize(input: CleanRestoredObjectRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<CleanRestoredObjectResult>;
}
