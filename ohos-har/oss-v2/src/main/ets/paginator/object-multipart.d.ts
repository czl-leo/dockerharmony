import type { ListMultipartUploadsRequest, ListMultipartUploadsResult, ListPartsRequest, ListPartsResult } from '../models/object-multipart.js';
import type { OperationOptions, Paginator, PaginatorClient, PaginatorOptions } from '../types.js';
/** Iterates the in-progress multipart uploads in a bucket, following the key and upload-id cursors. */
export declare class ListMultipartUploadsPaginator implements Paginator<ListMultipartUploadsResult> {
    readonly input: ListMultipartUploadsRequest;
    private readonly options?;
    constructor(input: ListMultipartUploadsRequest, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListMultipartUploadsResult>;
}
/** Iterates the uploaded parts of a multipart upload, following the `partNumberMarker` cursor. */
export declare class ListPartsPaginator implements Paginator<ListPartsResult> {
    readonly input: ListPartsRequest;
    private readonly options?;
    constructor(input: ListPartsRequest, options?: PaginatorOptions);
    pages(client: PaginatorClient, options?: OperationOptions): AsyncGenerator<ListPartsResult>;
}
