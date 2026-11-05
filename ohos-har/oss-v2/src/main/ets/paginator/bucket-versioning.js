import { ListObjectVersions } from '../api/bucket-versioning.js';
import { shallowClone } from '../utils/record.js';
/** Iterates every version and delete marker in a bucket, following the key and version-id cursors. */
export class ListObjectVersionsPaginator {
    constructor(input, options) {
        this.input = input;
        this.options = options;
    }
    async *pages(client, options) {
        const req = shallowClone(this.input);
        if (this.options?.limit !== undefined)
            req.maxKeys = this.options.limit;
        for (;;) {
            const result = await client.send(new ListObjectVersions(req), options);
            yield result;
            if (result.isTruncated !== true)
                return;
            req.keyMarker = result.nextKeyMarker;
            req.versionIdMarker = result.nextVersionIdMarker;
        }
    }
}
//# sourceMappingURL=bucket-versioning.js.map