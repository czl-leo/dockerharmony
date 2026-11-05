import { createHeaderFields } from '../utils/header-fields.js';
import { copyInto } from '../utils/record.js';
import { requireField, resultCommon, setDefaultContentMd5, setContentTypeIfAbsent, setHeaderBoolean, setHeaderString, setString, } from './common.js';
export function serializePutSymlink(request) {
    const bucket = requireField(request.bucket, 'bucket');
    const key = requireField(request.key, 'key');
    const symlinkTarget = requireField(request.symlinkTarget, 'symlinkTarget');
    const headers = createHeaderFields(request.headers);
    setHeaderString(headers, 'x-oss-symlink-target', symlinkTarget);
    setHeaderString(headers, 'x-oss-object-acl', request.objectAcl);
    setHeaderString(headers, 'x-oss-storage-class', request.storageClass);
    setHeaderBoolean(headers, 'x-oss-forbid-overwrite', request.forbidOverwrite);
    setContentTypeIfAbsent(headers, 'application/xml');
    setDefaultContentMd5(headers);
    const parameters = { symlink: '' };
    copyInto(parameters, request.parameters);
    return { opName: 'PutSymlink', method: 'PUT', bucket, key, headers, parameters };
}
export async function deserializePutSymlink(output) {
    const common = resultCommon(output);
    const headers = common.headers;
    if (output.body !== undefined)
        await output.body.bytes();
    return {
        status: common.status,
        statusCode: common.statusCode,
        requestId: common.requestId,
        headers,
        versionId: headers['x-oss-version-id'],
    };
}
export function serializeGetSymlink(request) {
    const bucket = requireField(request.bucket, 'bucket');
    const key = requireField(request.key, 'key');
    const headers = createHeaderFields(request.headers);
    setContentTypeIfAbsent(headers, 'application/xml');
    setDefaultContentMd5(headers);
    const parameters = { symlink: '' };
    copyInto(parameters, request.parameters);
    setString(parameters, 'versionId', request.versionId);
    return { opName: 'GetSymlink', method: 'GET', bucket, key, headers, parameters };
}
export async function deserializeGetSymlink(output) {
    const common = resultCommon(output);
    const headers = common.headers;
    if (output.body !== undefined)
        await output.body.bytes();
    return {
        status: common.status,
        statusCode: common.statusCode,
        requestId: common.requestId,
        headers,
        symlinkTarget: headers['x-oss-symlink-target'],
        versionId: headers['x-oss-version-id'],
    };
}
//# sourceMappingURL=object-symlink.js.map