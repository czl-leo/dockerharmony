import { ListMultipartUploads, ListParts } from '../api/object-multipart.js';
import { shallowClone } from '../utils/record.js';
/** Iterates the in-progress multipart uploads in a bucket, following the key and upload-id cursors. */
export class ListMultipartUploadsPaginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxUploads = this.options.limit;
        for (;;) {
            const result = await client.send(new ListMultipartUploads(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.keyMarker = result.nextKeyMarker;
            req.uploadIdMarker = result.nextUploadIdMarker;
        }
    }
}
/** Iterates the uploaded parts of a multipart upload, following the `partNumberMarker` cursor. */
export class ListPartsPaginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxParts = this.options.limit;
        for (;;) {
            const result = await client.send(new ListParts(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.partNumberMarker = result.nextPartNumberMarker;
        }
    }
}
//# sourceMappingURL=object-multipart.js.map