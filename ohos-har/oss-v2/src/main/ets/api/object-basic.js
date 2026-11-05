import { deserializeAppendObject, deserializeCleanRestoredObject, deserializeCopyObject, deserializeDeleteMultipleObjects, deserializeDeleteObject, deserializeGetObject, deserializeGetObjectMeta, deserializeHeadObject, deserializePutObject, deserializeRestoreObject, serializeAppendObject, serializeCleanRestoredObject, serializeCopyObject, serializeDeleteMultipleObjects, serializeDeleteObject, serializeGetObject, serializeGetObjectMeta, serializeHeadObject, serializePutObject, serializePutObjectPresign, serializeRestoreObject, } from '../transform/object-basic.js';
/** Uploads an object. */
export class PutObject {
    constructor(input) {
        this.opName = 'PutObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutObject(input));
    }
    serializePresign(input) {
        return Promise.resolve(serializePutObjectPresign(input));
    }
    deserialize(output) {
        return deserializePutObject(output);
    }
}
/** Downloads an object. */
export class GetObject {
    constructor(input) {
        this.opName = 'GetObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetObject(input));
    }
    /** The SDK adds nothing of its own to a download, so the presigned request is the same one. */
    serializePresign(input) {
        return Promise.resolve(serializeGetObject(input));
    }
    deserialize(output) {
        return Promise.resolve(deserializeGetObject(output));
    }
}
/** Queries the metadata of an object, without returning its content. */
export class HeadObject {
    constructor(input) {
        this.opName = 'HeadObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeHeadObject(input));
    }
    /** The SDK adds nothing of its own to a head, so the presigned request is the same one. */
    serializePresign(input) {
        return Promise.resolve(serializeHeadObject(input));
    }
    deserialize(output) {
        return deserializeHeadObject(output);
    }
}
/**
 * Deletes an object. Deleting a key that does not exist is a success, not a `NoSuchKey`: OSS
 * answers 204 whether or not the key was there.
 */
export class DeleteObject {
    constructor(input) {
        this.opName = 'DeleteObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeDeleteObject(input));
    }
    deserialize(output) {
        return deserializeDeleteObject(output);
    }
}
/** Copies an object within OSS, without downloading and re-uploading it. */
export class CopyObject {
    constructor(input) {
        this.opName = 'CopyObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeCopyObject(input));
    }
    deserialize(output) {
        return deserializeCopyObject(output);
    }
}
/** Appends data to the end of an appendable object, creating it on the first append at position 0. */
export class AppendObject {
    constructor(input) {
        this.opName = 'AppendObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeAppendObject(input));
    }
    deserialize(output) {
        return deserializeAppendObject(output);
    }
}
/** Deletes multiple objects in one request. */
export class DeleteMultipleObjects {
    constructor(input) {
        this.opName = 'DeleteMultipleObjects';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeDeleteMultipleObjects(input));
    }
    deserialize(output) {
        return deserializeDeleteMultipleObjects(output);
    }
}
/** Queries a small fixed set of object metadata, without the stored user metadata a HEAD returns. */
export class GetObjectMeta {
    constructor(input) {
        this.opName = 'GetObjectMeta';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetObjectMeta(input));
    }
    deserialize(output) {
        return deserializeGetObjectMeta(output);
    }
}
/** Restores an Archive or Cold Archive object into a readable state. */
export class RestoreObject {
    constructor(input) {
        this.opName = 'RestoreObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeRestoreObject(input));
    }
    deserialize(output) {
        return deserializeRestoreObject(output);
    }
}
/** Discards the readable copy created by RestoreObject ahead of its expiry. */
export class CleanRestoredObject {
    constructor(input) {
        this.opName = 'CleanRestoredObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeCleanRestoredObject(input));
    }
    deserialize(output) {
        return deserializeCleanRestoredObject(output);
    }
}
//# sourceMappingURL=object-basic.js.map