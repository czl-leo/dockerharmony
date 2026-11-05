import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { DeleteObjectTaggingRequest, DeleteObjectTaggingResult, GetObjectTaggingRequest, GetObjectTaggingResult, PutObjectTaggingRequest, PutObjectTaggingResult } from '../models/object-tagging.js';
/** Attaches or replaces the tags of an object. */
export declare class PutObjectTagging implements Command<PutObjectTaggingRequest, PutObjectTaggingResult> {
    readonly opName = "PutObjectTagging";
    readonly input: PutObjectTaggingRequest;
    constructor(input: PutObjectTaggingRequest);
    serialize(input: PutObjectTaggingRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutObjectTaggingResult>;
}
/** Reads the tags of an object. */
export declare class GetObjectTagging implements Command<GetObjectTaggingRequest, GetObjectTaggingResult> {
    readonly opName = "GetObjectTagging";
    readonly input: GetObjectTaggingRequest;
    constructor(input: GetObjectTaggingRequest);
    serialize(input: GetObjectTaggingRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetObjectTaggingResult>;
}
/** Removes all tags from an object. */
export declare class DeleteObjectTagging implements Command<DeleteObjectTaggingRequest, DeleteObjectTaggingResult> {
    readonly opName = "DeleteObjectTagging";
    readonly input: DeleteObjectTaggingRequest;
    constructor(input: DeleteObjectTaggingRequest);
    serialize(input: DeleteObjectTaggingRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<DeleteObjectTaggingResult>;
}
