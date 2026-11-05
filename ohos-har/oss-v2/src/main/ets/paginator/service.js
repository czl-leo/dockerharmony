import { ListBuckets } from '../api/service.js';
import { shallowClone } from '../utils/record.js';
/** Iterates the buckets an account owns, following the `marker` cursor. */
export class ListBucketsPaginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxKeys = this.options.limit;
        for (;;) {
            const result = await client.send(new ListBuckets(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.marker = result.nextMarker;
        }
    }
}
//# sourceMappingURL=service.js.map