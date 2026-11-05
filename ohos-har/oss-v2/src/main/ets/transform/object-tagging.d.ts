import type { OperationInput, OperationOutput } from '../types.js';
import type { DeleteObjectTaggingRequest, DeleteObjectTaggingResult, GetObjectTaggingRequest, GetObjectTaggingResult, PutObjectTaggingRequest, PutObjectTaggingResult } from '../models/object-tagging.js';
export declare function serializePutObjectTagging(request: PutObjectTaggingRequest): OperationInput;
export declare function deserializePutObjectTagging(output: OperationOutput): Promise<PutObjectTaggingResult>;
export declare function serializeGetObjectTagging(request: GetObjectTaggingRequest): OperationInput;
export declare function deserializeGetObjectTagging(output: OperationOutput): Promise<GetObjectTaggingResult>;
export declare function serializeDeleteObjectTagging(request: DeleteObjectTaggingRequest): OperationInput;
export declare function deserializeDeleteObjectTagging(output: OperationOutput): Promise<DeleteObjectTaggingResult>;
