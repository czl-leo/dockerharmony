import type { ResponseMessage } from '../transport/types.js';
import { ServiceError } from './types.js';
/** Converts a non-2xx response into a `ServiceError` without throwing. */
export declare function toServiceError(response: ResponseMessage, requestTarget: string): Promise<ServiceError>;
