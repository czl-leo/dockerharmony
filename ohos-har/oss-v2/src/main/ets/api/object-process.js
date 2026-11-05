import { deserializeAsyncProcessObject, deserializeProcessObject, serializeAsyncProcessObject, serializeProcessObject, } from '../transform/object-process.js';
/** Processes an object and stores the result as a new object. */
export class ProcessObject {
    constructor(input) {
        this.opName = 'ProcessObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeProcessObject(input));
    }
    deserialize(output) {
        return deserializeProcessObject(output);
    }
}
/** Submits an asynchronous media or image processing task. */
export class AsyncProcessObject {
    constructor(input) {
        this.opName = 'AsyncProcessObject';
        this.input = input;
    }
    serialize(input) {
        return Promise.resolve(serializeAsyncProcessObject(input));
    }
    deserialize(output) {
        return deserializeAsyncProcessObject(output);
    }
}
//# sourceMappingURL=object-process.js.map