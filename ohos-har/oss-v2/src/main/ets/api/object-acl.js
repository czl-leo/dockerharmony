import { deserializeGetObjectAcl, deserializePutObjectAcl, serializeGetObjectAcl, serializePutObjectAcl, } from '../transform/object-acl.js';
/** Sets the ACL of an object. */
export class PutObjectAcl {
    constructor(input) {
        this.opName = 'PutObjectAcl';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializePutObjectAcl(input));
    }
    deserialize(output) {
        return deserializePutObjectAcl(output);
    }
}
/** Reads the ACL of an object. */
export class GetObjectAcl {
    constructor(input) {
        this.opName = 'GetObjectAcl';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeGetObjectAcl(input));
    }
    deserialize(output) {
        return deserializeGetObjectAcl(output);
    }
}
//# sourceMappingURL=object-acl.js.map