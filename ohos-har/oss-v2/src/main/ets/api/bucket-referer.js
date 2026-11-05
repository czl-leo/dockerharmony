import { deserializeGetBucketReferer, deserializePutBucketReferer, serializeGetBucketReferer, serializePutBucketReferer, } from '../transform/bucket-referer.js';
/** Sets the hotlink protection (Referer) configuration of a bucket. */
export class PutBucketReferer {
    constructor(input) {
        this.opName = 'PutBucketReferer';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutBucketReferer(input));
    }
    deserialize(output) {
        return deserializePutBucketReferer(output);
    }
}
/** Reads the hotlink protection (Referer) configuration of a bucket. */
export class GetBucketReferer {
    constructor(input) {
        this.opName = 'GetBucketReferer';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketReferer(input));
    }
    deserialize(output) {
        return deserializeGetBucketReferer(output);
    }
}
//# sourceMappingURL=bucket-referer.js.map