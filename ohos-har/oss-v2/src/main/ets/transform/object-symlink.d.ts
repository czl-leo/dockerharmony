import type { OperationInput, OperationOutput } from '../types.js';
import type { GetSymlinkRequest, GetSymlinkResult, PutSymlinkRequest, PutSymlinkResult } from '../models/object-symlink.js';
export declare function serializePutSymlink(request: PutSymlinkRequest): OperationInput;
export declare function deserializePutSymlink(output: OperationOutput): Promise<PutSymlinkResult>;
export declare function serializeGetSymlink(request: GetSymlinkRequest): OperationInput;
export declare function deserializeGetSymlink(output: OperationOutput): Promise<GetSymlinkResult>;
