import { deserializeGetBucketAcl, deserializePutBucketAcl, serializeGetBucketAcl, serializePutBucketAcl, } from '../transform/bucket-acl.js';
/** Sets a bucket's ACL. Valid values: private, public-read, public-read-write. */
export class PutBucketAcl {
    constructor(input) {
        this.opName = 'PutBucketAcl';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutBucketAcl(input));
    }
    deserialize(output) {
        return deserializePutBucketAcl(output);
    }
}
/** Reads a bucket's ACL and owner. */
export class GetBucketAcl {
    constructor(input) {
        this.opName = 'GetBucketAcl';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketAcl(input));
    }
    deserialize(output) {
        return deserializeGetBucketAcl(output);
    }
}
//# sourceMappingURL=bucket-acl.js.map