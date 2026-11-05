import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { GetSymlinkRequest, GetSymlinkResult, PutSymlinkRequest, PutSymlinkResult } from '../models/object-symlink.js';
/** Creates a symbolic link that points to a target object. */
export declare class PutSymlink implements Command<PutSymlinkRequest, PutSymlinkResult> {
    readonly opName = "PutSymlink";
    readonly input: PutSymlinkRequest;
    constructor(input: PutSymlinkRequest);
    serialize(input: PutSymlinkRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutSymlinkResult>;
}
/** Reads a symbolic link and the target it points to. */
export declare class GetSymlink implements Command<GetSymlinkRequest, GetSymlinkResult> {
    readonly opName = "GetSymlink";
    readonly input: GetSymlinkRequest;
    constructor(input: GetSymlinkRequest);
    serialize(input: GetSymlinkRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetSymlinkResult>;
}
