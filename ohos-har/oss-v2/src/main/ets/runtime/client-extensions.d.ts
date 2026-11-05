import type { GetObjectRequest, GetObjectResult, PutObjectRequest, PutObjectResult } from '../models/object-basic.js';
import type { Command, OperationOptions } from '../types.js';
interface ClientApi {
    send<I, O>(command: Command<I, O>, options?: OperationOptions): Promise<O>;
}
export declare function putObjectFromFile(_client: ClientApi, _request: PutObjectRequest, _path: string, _options?: OperationOptions): Promise<PutObjectResult>;
export declare function getObjectToFile(_client: ClientApi, _request: GetObjectRequest, _path: string, _options?: OperationOptions): Promise<GetObjectResult>;
export {};
