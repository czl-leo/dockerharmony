import type { OperationInput, OperationOutput } from '../types.js';
import type { DescribeRegionsRequest, DescribeRegionsResult, ListBucketsRequest, ListBucketsResult } from '../models/service.js';
export declare function serializeListBuckets(request: ListBucketsRequest): OperationInput;
export declare function deserializeListBuckets(output: OperationOutput): Promise<ListBucketsResult>;
export declare function serializeDescribeRegions(request: DescribeRegionsRequest): OperationInput;
export declare function deserializeDescribeRegions(output: OperationOutput): Promise<DescribeRegionsResult>;
