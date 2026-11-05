import { deserializeAbortMultipartUpload, deserializeCompleteMultipartUpload, deserializeInitiateMultipartUpload, deserializeListMultipartUploads, deserializeListParts, deserializeUploadPart, deserializeUploadPartCopy, serializeAbortMultipartUpload, serializeCompleteMultipartUpload, serializeInitiateMultipartUpload, serializeListMultipartUploads, serializeListParts, serializeUploadPart, serializeUploadPartCopy, } from '../transform/object-multipart.js';
/** Starts a multipart upload and returns the upload ID that the later parts reference. */
export class InitiateMultipartUpload {
    constructor(input) {
        this.opName = 'InitiateMultipartUpload';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeInitiateMultipartUpload(input));
    }
    deserialize(output) {
        return deserializeInitiateMultipartUpload(output);
    }
}
/** Uploads one part of a multipart upload. */
export class UploadPart {
    constructor(input) {
        this.opName = 'UploadPart';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeUploadPart(input));
    }
    deserialize(output) {
        return deserializeUploadPart(output);
    }
}
/** Assembles the uploaded parts into the final object. */
export class CompleteMultipartUpload {
    constructor(input) {
        this.opName = 'CompleteMultipartUpload';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeCompleteMultipartUpload(input));
    }
    deserialize(output) {
        return deserializeCompleteMultipartUpload(output, this.input.callback !== undefined);
    }
}
/** Uploads one part by copying a range from an existing object. */
export class UploadPartCopy {
    constructor(input) {
        this.opName = 'UploadPartCopy';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeUploadPartCopy(input));
    }
    deserialize(output) {
        return deserializeUploadPartCopy(output);
    }
}
/** Cancels a multipart upload and frees the parts already stored. */
export class AbortMultipartUpload {
    constructor(input) {
        this.opName = 'AbortMultipartUpload';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeAbortMultipartUpload(input));
    }
    deserialize(output) {
        return deserializeAbortMultipartUpload(output);
    }
}
/** Lists the multipart uploads that have been started but not completed or aborted. */
export class ListMultipartUploads {
    constructor(input) {
        this.opName = 'ListMultipartUploads';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListMultipartUploads(input));
    }
    deserialize(output) {
        return deserializeListMultipartUploads(output);
    }
}
/** Lists the parts already uploaded for a multipart upload. */
export class ListParts {
    constructor(input) {
        this.opName = 'ListParts';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeListParts(input));
    }
    deserialize(output) {
        return deserializeListParts(output);
    }
}
//# sourceMappingURL=object-multipart.js.map