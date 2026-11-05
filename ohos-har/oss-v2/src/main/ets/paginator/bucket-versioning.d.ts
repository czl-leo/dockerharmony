import type { ListObjectVersionsRequest, ListObjectVersionsResult } from '../models/bucket-versioning.js';
import type { OperationOptions, Paginator, PaginatorClient, PaginatorOptions } from '../types.js';
/** Iterates every version and delete marker in a bucket, following the key and version-id cursors. */
export declare class ListObjectVersionsPaginator implements Paginator<ListObjectVersionsResult> {
    readonly input: ListObjectVersionsRequest;
    private readonly options?;
    constructor(input: ListObjectVersionsRequest, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListObjectVersionsResult>;
}
