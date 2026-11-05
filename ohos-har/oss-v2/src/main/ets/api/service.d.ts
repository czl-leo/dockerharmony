import type { Command, OperationInput, OperationOutput } from '../types.js';
import type { DescribeRegionsRequest, DescribeRegionsResult, ListBucketsRequest, ListBucketsResult } from '../models/service.js';
/**
 * Lists the buckets owned by the requester, one page at a time. When the result is truncated, pass
 * its `nextMarker` to the next call as `marker`.
 */
export declare class ListBuckets implements Command<ListBucketsRequest, ListBucketsResult> {
    readonly opName = "ListBuckets";
    readonly input: ListBucketsRequest;
    constructor(input?: ListBucketsRequest);
    serialize(input: ListBucketsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<ListBucketsResult>;
}
/** Describes the OSS regions and their endpoints. Left unset, `regions` returns every region. */
export declare class DescribeRegions implements Command<DescribeRegionsRequest, DescribeRegionsResult> {
    readonly opName = "DescribeRegions";
    readonly input: DescribeRegionsRequest;
    constructor(input?: DescribeRegionsRequest);
    serialize(input: DescribeRegionsRequest): Promise<OperationInput>;
    deserialize(output: OperationOutput): Promise<DescribeRegionsResult>;
}
