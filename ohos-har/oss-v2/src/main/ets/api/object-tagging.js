import { deserializeDeleteObjectTagging, deserializeGetObjectTagging, deserializePutObjectTagging, serializeDeleteObjectTagging, serializeGetObjectTagging, serializePutObjectTagging, } from '../transform/object-tagging.js';
/** Attaches or replaces the tags of an object. */
export class PutObjectTagging {
    constructor(input) {
        this.opName = 'PutObjectTagging';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutObjectTagging(input));
    }
    deserialize(output) {
        return deserializePutObjectTagging(output);
    }
}
/** Reads the tags of an object. */
export class GetObjectTagging {
    constructor(input) {
        this.opName = 'GetObjectTagging';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetObjectTagging(input));
    }
    deserialize(output) {
        return deserializeGetObjectTagging(output);
    }
}
/** Removes all tags from an object. */
export class DeleteObjectTagging {
    constructor(input) {
        this.opName = 'DeleteObjectTagging';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeDeleteObjectTagging(input));
    }
    deserialize(output) {
        return deserializeDeleteObjectTagging(output);
    }
}
//# sourceMappingURL=object-tagging.js.map