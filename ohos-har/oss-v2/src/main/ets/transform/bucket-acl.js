import { DeserializationError } from '../error/types.js';
import { createHeaderFields } from '../utils/header-fields.js';
import { copyInto } from '../utils/record.js';
import { childOf, parseXml, textOf } from '../xml/parse.js';
import { requireField, resultCommon, setDefaultContentMd5, setContentTypeIfAbsent, setHeaderString } from './common.js';
export function serializePutBucketAcl(request) {
    const bucket = requireField(request.bucket, 'bucket');
    const acl = requireField(request.acl, 'acl');
    const headers = createHeaderFields(request.headers);
    setHeaderString(headers, 'x-oss-acl', acl);
    setContentTypeIfAbsent(headers, 'application/xml');
    setDefaultContentMd5(headers);
    const parameters = { acl: '' };
    copyInto(parameters, request.parameters);
    return { opName: 'PutBucketAcl', method: 'PUT', bucket, headers, parameters };
}
export async function deserializePutBucketAcl(output) {
    const common = resultCommon(output);
    if (output.body !== undefined)
        await output.body.bytes();
    return common;
}
export function serializeGetBucketAcl(request) {
    const bucket = requireField(request.bucket, 'bucket');
    const headers = createHeaderFields(request.headers);
    setDefaultContentMd5(headers);
    const parameters = { acl: '' };
    copyInto(parameters, request.parameters);
    return { opName: 'GetBucketAcl', method: 'GET', bucket, headers, parameters };
}
function readOwner(node) {
    const owner = childOf(node, 'Owner');
    if (owner === undefined)
        return undefined;
    return { id: textOf(owner, 'ID'), displayName: textOf(owner, 'DisplayName') };
}
function readAccessControlList(node) {
    const acl = childOf(node, 'AccessControlList');
    if (acl === undefined)
        return undefined;
    return { grant: textOf(acl, 'Grant') };
}
function readAccessControlPolicy(root) {
    return { owner: readOwner(root), accessControlList: readAccessControlList(root) };
}
export async function deserializeGetBucketAcl(output) {
    const common = resultCommon(output);
    const text = output.body === undefined ? '' : await output.body.text();
    let root;
    try {
        root = parseXml(text);
    }
    catch (err) {
        throw new DeserializationError('the response body is not XML', err instanceof Error ? err : undefined);
    }
    if (root.name !== 'AccessControlPolicy') {
        throw new DeserializationError('expected element type <AccessControlPolicy> but have <' + root.name + '>');
    }
    return {
        status: common.status,
        statusCode: common.statusCode,
        requestId: common.requestId,
        headers: common.headers,
        accessControlPolicy: readAccessControlPolicy(root),
    };
}
//# sourceMappingURL=bucket-acl.js.map