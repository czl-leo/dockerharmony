import { deserializeGetBucketVersioning, deserializeListObjectVersions, deserializePutBucketVersioning, serializeGetBucketVersioning, serializeListObjectVersions, serializePutBucketVersioning, } from '../transform/bucket-versioning.js';
/** Sets the versioning state of a bucket. Valid states: Enabled, Suspended. */
export class PutBucketVersioning {
    constructor(input) {
        this.opName = 'PutBucketVersioning';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutBucketVersioning(input));
    }
    deserialize(output) {
        return deserializePutBucketVersioning(output);
    }
}
/** Reads the versioning state of a bucket. */
export class GetBucketVersioning {
    constructor(input) {
        this.opName = 'GetBucketVersioning';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketVersioning(input));
    }
    deserialize(output) {
        return deserializeGetBucketVersioning(output);
    }
}
/** Lists the versions of the objects in a bucket, including delete markers. */
export class ListObjectVersions {
    constructor(input) {
        this.opName = 'ListObjectVersions';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListObjectVersions(input));
    }
    deserialize(output) {
        return deserializeListObjectVersions(output);
    }
}
//# sourceMappingURL=bucket-versioning.js.map