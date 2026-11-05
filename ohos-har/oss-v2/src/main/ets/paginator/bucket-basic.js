import { ListObjects, ListObjectsV2 } from '../api/bucket-basic.js';
import { shallowClone } from '../utils/record.js';
/** Iterates the objects in a bucket, following the `continuationToken` cursor. */
export class ListObjectsV2Paginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxKeys = this.options.limit;
        for (;;) {
            const result = await client.send(new ListObjectsV2(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.continuationToken = result.nextContinuationToken;
        }
    }
}
/** Iterates the objects in a bucket in the V1 style, following the `marker` cursor. */
export class ListObjectsPaginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxKeys = this.options.limit;
        for (;;) {
            const result = await client.send(new ListObjects(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.marker = result.nextMarker;
        }
    }
}
//# sourceMappingURL=bucket-basic.js.map