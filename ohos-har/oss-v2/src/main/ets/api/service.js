import { deserializeDescribeRegions, deserializeListBuckets, serializeDescribeRegions, serializeListBuckets, } from '../transform/service.js';
/**
 * Lists the buckets owned by the requester, one page at a time. When the result is truncated, pass
 * its `nextMarker` to the next call as `marker`.
 */
export class ListBuckets {
    constructor(input = {}) {
        this.opName = 'ListBuckets';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListBuckets(input));
    }
    deserialize(output) {
        return deserializeListBuckets(output);
    }
}
/** Describes the OSS regions and their endpoints. Left unset, `regions` returns every region. */
export class DescribeRegions {
    constructor(input = {}) {
        this.opName = 'DescribeRegions';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeDescribeRegions(input));
    }
    deserialize(output) {
        return deserializeDescribeRegions(output);
    }
}
//# sourceMappingURL=service.js.map