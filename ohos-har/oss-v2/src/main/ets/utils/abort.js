import { CanceledError } from '../error/types.js';
/** Throws `CanceledError` if the signal has already fired. */
export function throwIfAborted(signal) {
    if (signal !== undefined && signal.aborted)
        throw new CanceledError();
}
/** Resolves with `promise`, or rejects with `CanceledError` when `signal` fires. */
export function raceAbort(promise, signal) {
    if (signal.aborted)
        return Promise.reject(new CanceledError());
    return new Promise((resolve, reject) => {
        const onAbort = () => {
            signal.removeEventListener('abort', onAbort);
            reject(new CanceledError());
        };
        signal.addEventListener('abort', onAbort);
        promise.then((value) => {
            signal.removeEventListener('abort', onAbort);
            resolve(value);
        }, (err) => {
            signal.removeEventListener('abort', onAbort);
            reject(err);
        });
    });
}
//# sourceMappingURL=abort.js.map