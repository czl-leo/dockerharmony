import { throwIfAborted } from '../utils/abort.js';
import { ParamRequiredError } from '../error/types.js';
export const missingTransport = {
    send: () => Promise.reject(new ParamRequiredError('Config.transport')),
};
/** The terminal middleware and the only one that touches the platform. */
export class TransportMiddleware {
    constructor(transport) {
        this.transport = transport;
    }
    async execute(request, context) {
        throwIfAborted(context.signal);
        return await this.transport.send(request, {
            readWriteTimeoutMs: context.readWriteTimeoutMs,
            progressReporter: context.progressObserver?.feed,
            signal: context.signal,
            responseStream: context.responseStream,
        });
    }
}
//# sourceMappingURL=transport-middleware.js.map