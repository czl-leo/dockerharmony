import type { ListObjectsRequest, ListObjectsResult, ListObjectsV2Request, ListObjectsV2Result } from '../models/bucket-basic.js';
import type { OperationOptions, Paginator, PaginatorClient, PaginatorOptions } from '../types.js';
/** Iterates the objects in a bucket, following the `continuationToken` cursor. */
export declare class ListObjectsV2Paginator implements Paginator<ListObjectsV2Result> {
    readonly input: ListObjectsV2Request;
    private readonly options?;
    constructor(input: ListObjectsV2Request, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListObjectsV2Result>;
}
/** Iterates the objects in a bucket in the V1 style, following the `marker` cursor. */
export declare class ListObjectsPaginator implements Paginator<ListObjectsResult> {
    readonly input: ListObjectsRequest;
    private readonly options?;
    constructor(input: ListObjectsRequest, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListObjectsResult>;
}
