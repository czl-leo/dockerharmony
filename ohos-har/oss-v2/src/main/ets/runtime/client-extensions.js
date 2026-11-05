import { NotSupportedError } from '../error/types.js';
export function putObjectFromFile(_client, _request, _path, _options) {
    return Promise.reject(new NotSupportedError('putObjectFromFile'));
}
export function getObjectToFile(_client, _request, _path, _options) {
    return Promise.reject(new NotSupportedError('getObjectToFile'));
}
//# sourceMappingURL=client-extensions.harmony.js.map