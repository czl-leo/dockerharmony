import { deserializeGetSymlink, deserializePutSymlink, serializeGetSymlink, serializePutSymlink, } from '../transform/object-symlink.js';
/** Creates a symbolic link that points to a target object. */
export class PutSymlink {
    constructor(input) {
        this.opName = 'PutSymlink';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutSymlink(input));
    }
    deserialize(output) {
        return deserializePutSymlink(output);
    }
}
/** Reads a symbolic link and the target it points to. */
export class GetSymlink {
    constructor(input) {
        this.opName = 'GetSymlink';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetSymlink(input));
    }
    deserialize(output) {
        return deserializeGetSymlink(output);
    }
}
//# sourceMappingURL=object-symlink.js.map