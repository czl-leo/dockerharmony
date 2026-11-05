import { deserializeDeleteBucket, deserializeGetBucketInfo, deserializeGetBucketLocation, deserializeGetBucketStat, deserializeListObjects, deserializeListObjectsV2, deserializePutBucket, serializeDeleteBucket, serializeGetBucketInfo, serializeGetBucketLocation, serializeGetBucketStat, serializeListObjects, serializeListObjectsV2, serializePutBucket, } from '../transform/bucket-basic.js';
/**
 * Lists the objects in a bucket, one page at a time. When the result is truncated, pass its
 * `nextContinuationToken` to the next call.
 */
export class ListObjectsV2 {
    constructor(input) {
        this.opName = 'ListObjectsV2';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListObjectsV2(input));
    }
    deserialize(output) {
        return deserializeListObjectsV2(output);
    }
}
/**
 * Lists the objects in a bucket, one page at a time, in the original (V1) style. When the result is
 * truncated, pass its `nextMarker` to the next call. Prefer `ListObjectsV2` for new code.
 */
export class ListObjects {
    constructor(input) {
        this.opName = 'ListObjects';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListObjects(input));
    }
    deserialize(output) {
        return deserializeListObjects(output);
    }
}
/** Reads a bucket's configuration: region, endpoints, owner, ACL, encryption, versioning. */
export class GetBucketInfo {
    constructor(input) {
        this.opName = 'GetBucketInfo';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketInfo(input));
    }
    deserialize(output) {
        return deserializeGetBucketInfo(output);
    }
}
/** Reads the region a bucket lives in, e.g. `oss-cn-hangzhou`. */
export class GetBucketLocation {
    constructor(input) {
        this.opName = 'GetBucketLocation';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketLocation(input));
    }
    deserialize(output) {
        return deserializeGetBucketLocation(output);
    }
}
/** Reads a bucket's storage usage and object counts, broken down by storage class. */
export class GetBucketStat {
    constructor(input) {
        this.opName = 'GetBucketStat';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetBucketStat(input));
    }
    deserialize(output) {
        return deserializeGetBucketStat(output);
    }
}
/** Creates a bucket. Left unconfigured, OSS creates it `Standard` and `private`, unversioned. */
export class PutBucket {
    constructor(input) {
        this.opName = 'PutBucket';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutBucket(input));
    }
    deserialize(output) {
        return deserializePutBucket(output);
    }
}
/**
 * Deletes a bucket that is already empty. Emptying it is the caller's job: a bucket still holding an
 * object, a version or an unfinished multipart upload comes back 409 `BucketNotEmpty`.
 */
export class DeleteBucket {
    constructor(input) {
        this.opName = 'DeleteBucket';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeDeleteBucket(input));
    }
    deserialize(output) {
        return deserializeDeleteBucket(output);
    }
}
//# sourceMappingURL=bucket-basic.js.map