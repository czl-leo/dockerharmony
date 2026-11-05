import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { AbortMultipartUploadRequest, AbortMultipartUploadResult, CompleteMultipartUploadRequest, CompleteMultipartUploadResult, InitiateMultipartUploadRequest, InitiateMultipartUploadResult, ListMultipartUploadsRequest, ListMultipartUploadsResult, ListPartsRequest, ListPartsResult, UploadPartCopyRequest, UploadPartCopyResult, UploadPartRequest, UploadPartResult } from '../models/object-multipart.js';
/** Starts a multipart upload and returns the upload ID that the later parts reference. */
export declare class InitiateMultipartUpload implements Command<InitiateMultipartUploadRequest, InitiateMultipartUploadResult> {
    readonly opName = "InitiateMultipartUpload";
    readonly input: InitiateMultipartUploadRequest;
    constructor(input: InitiateMultipartUploadRequest);
    serialize(input: InitiateMultipartUploadRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<InitiateMultipartUploadResult>;
}
/** Uploads one part of a multipart upload. */
export declare class UploadPart implements Command<UploadPartRequest, UploadPartResult> {
    readonly opName = "UploadPart";
    readonly input: UploadPartRequest;
    constructor(input: UploadPartRequest);
    serialize(input: UploadPartRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<UploadPartResult>;
}
/** Assembles the uploaded parts into the final object. */
export declare class CompleteMultipartUpload implements Command<CompleteMultipartUploadRequest, CompleteMultipartUploadResult> {
    readonly opName = "CompleteMultipartUpload";
    readonly input: CompleteMultipartUploadRequest;
    constructor(input: CompleteMultipartUploadRequest);
    serialize(input: CompleteMultipartUploadRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<CompleteMultipartUploadResult>;
}
/** Uploads one part by copying a range from an existing object. */
export declare class UploadPartCopy implements Command<UploadPartCopyRequest, UploadPartCopyResult> {
    readonly opName = "UploadPartCopy";
    readonly input: UploadPartCopyRequest;
    constructor(input: UploadPartCopyRequest);
    serialize(input: UploadPartCopyRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<UploadPartCopyResult>;
}
/** Cancels a multipart upload and frees the parts already stored. */
export declare class AbortMultipartUpload implements Command<AbortMultipartUploadRequest, AbortMultipartUploadResult> {
    readonly opName = "AbortMultipartUpload";
    readonly input: AbortMultipartUploadRequest;
    constructor(input: AbortMultipartUploadRequest);
    serialize(input: AbortMultipartUploadRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<AbortMultipartUploadResult>;
}
/** Lists the multipart uploads that have been started but not completed or aborted. */
export declare class ListMultipartUploads implements Command<ListMultipartUploadsRequest, ListMultipartUploadsResult> {
    readonly opName = "ListMultipartUploads";
    readonly input: ListMultipartUploadsRequest;
    constructor(input: ListMultipartUploadsRequest);
    serialize(input: ListMultipartUploadsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListMultipartUploadsResult>;
}
/** Lists the parts already uploaded for a multipart upload. */
export declare class ListParts implements Command<ListPartsRequest, ListPartsResult> {
    readonly opName = "ListParts";
    readonly input: ListPartsRequest;
    constructor(input: ListPartsRequest);
    serialize(input: ListPartsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListPartsResult>;
}
