import type { ResponseBody } from './types.js';
/** A replayable `ResponseBody` over bytes already buffered in memory. */
export declare function bufferedBody(bytes: Uint8Array): ResponseBody;
/** `true` only when the caller asked to stream and the status is 2xx without 203. */
export declare function allowsStreaming(responseStream: boolean | undefined, statusCode: number): boolean;
