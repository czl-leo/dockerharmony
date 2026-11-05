import type { ListBucketsRequest, ListBucketsResult } from '../models/service.js';
import type { OperationOptions, Paginator, PaginatorClient, PaginatorOptions } from '../types.js';
/** Iterates the buckets an account owns, following the `marker` cursor. */
export declare class ListBucketsPaginator implements Paginator<ListBucketsResult> {
    readonly input: ListBucketsRequest;
    private readonly options?;
    constructor(input: ListBucketsRequest, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListBucketsResult>;
}
