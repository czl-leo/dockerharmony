import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { GetBucketRefererRequest, GetBucketRefererResult, PutBucketRefererRequest, PutBucketRefererResult } from '../models/bucket-referer.js';
/** Sets the hotlink protection (Referer) configuration of a bucket. */
export declare class PutBucketReferer implements Command<PutBucketRefererRequest, PutBucketRefererResult> {
    readonly opName = "PutBucketReferer";
    readonly input: PutBucketRefererRequest;
    constructor(input: PutBucketRefererRequest);
    serialize(input: PutBucketRefererRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<PutBucketRefererResult>;
}
/** Reads the hotlink protection (Referer) configuration of a bucket. */
export declare class GetBucketReferer implements Command<GetBucketRefererRequest, GetBucketRefererResult> {
    readonly opName = "GetBucketReferer";
    readonly input: GetBucketRefererRequest;
    constructor(input: GetBucketRefererRequest);
    serialize(input: GetBucketRefererRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<GetBucketRefererResult>;
}
