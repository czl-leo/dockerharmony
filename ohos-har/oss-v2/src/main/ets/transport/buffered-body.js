import { utf8Decode } from '../utils/bytes.js';
/** A replayable `ResponseBody` over bytes already buffered in memory. */
export function bufferedBody(bytes) {
    return {
        bytes: () => Promise.resolve(bytes),
        text: () => Promise.resolve(utf8Decode(bytes)),
        // Each call returns a reader over the full body.
        stream: () => {
            let sent = bytes.byteLength === 0;
            return {
                read: () => {
                    if (sent)
                        return Promise.resolve(null);
                    sent = true;
                    return Promise.resolve(bytes);
                },
            };
        },
    };
}
/** `true` only when the caller asked to stream and the status is 2xx without 203. */
export function allowsStreaming(responseStream, statusCode) {
    return responseStream === true && statusCode >= 200 && statusCode < 300 && statusCode !== 203;
}
//# sourceMappingURL=buffered-body.js.map