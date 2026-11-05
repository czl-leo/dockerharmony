import type { HttpTransport, HttpTransportOptions } from '../../transport/types.js';
import { type RawHeaders } from './headers.js';
/** The subset of `@ohos.net.http` request options this transport sets. */
export interface HarmonyRequestOptions {
    method: string;
    /** Singular, matching `@ohos.net.http`. */
    header: Record<string, string>;
    extraData?: string | ArrayBufferLike;
    expectDataType: number;
    connectTimeout?: number;
    readTimeout: number;
    maxLimit: number;
    usingProxy?: HarmonyHttpProxy;
}
/** netstack's proxy options: host, port, and directly reached hosts. */
export interface HarmonyHttpProxy {
    host: string;
    port: number;
    exclusionList: string[];
}
/** What `request` resolves with. */
export interface HttpResponse {
    responseCode: number;
    header: RawHeaders;
    /** An `ArrayBuffer` when `expectDataType` is `ARRAY_BUFFER`. */
    result: string | ArrayBuffer | object;
}
/** netstack's `DataSendProgressInfo`: both counts are cumulative totals, not per-chunk deltas. */
export interface DataSendProgressInfo {
    sendSize: number;
    totalSize: number;
}
/** One netstack request handle, as `createHttp()` returns. */
export interface HttpRequest {
    request(url: string, options: HarmonyRequestOptions): Promise<HttpResponse>;
    /** Fires as the buffered body drains to the socket; the running `sendSize` is a cumulative total. */
    on(type: 'dataSendProgress', callback: (info: DataSendProgressInfo) => void): void;
    off(type: 'dataSendProgress', callback?: (info: DataSendProgressInfo) => void): void;
    /** The only way to abort an in-flight request, and the handle release. */
    destroy(): void;
}
/** The member of netstack's `HttpDataType` enum used by this transport. */
export interface HarmonyHttpDataType {
    readonly ARRAY_BUFFER: number;
}
/** As much of `@ohos.net.http`'s default export as this transport uses. */
export interface HarmonyHttpModule {
    createHttp(): HttpRequest;
    HttpDataType: HarmonyHttpDataType;
}
/** The settings this transport is built with, on top of the network ones every platform takes. */
export interface HarmonyTransportOptions extends HttpTransportOptions {
    /** Defaults to `@ohos.net.http`. Pass an adapter of your own to drive a different handle. */
    http?: HarmonyHttpModule;
}
/**
 * The HTTP transport over `@ohos.net.http`. A `Config` on this platform needs no `transport`; pass
 * `options.http` to drive a different handle.
 *
 * Platform limitations:
 *
 * 1. **Bodies are buffered in both directions,** and a response is capped at 100 MiB. A one-shot
 *    `StreamContent` request body raises `SerializationError`; a replayable body (bytes, string, or a
 *    `FileContent`) is drained into memory and sent whole, and a larger object needs ranged requests.
 *    Upload progress is still observable: netstack reports the buffered body draining to the socket.
 * 2. **`readWriteTimeoutMs` is ignored.** netstack exposes a whole-transfer deadline rather than an
 *    idle deadline; a total request budget can be supplied through `signal`.
 * 3. **The `User-Agent` names no platform.** `Config.userAgent` does reach the network.
 * 4. **Only an unauthenticated HTTP proxy is honoured.** `proxyHost` schemes and credentials are ignored.
 * 5. **`insecureSkipVerify` is ignored:** skipping certificate verification is compile-gated in
 *    netstack and not reachable from the JS API, so verification always runs.
 * 6. **`enabledRedirect` is ignored:** netstack follows redirects unconditionally and offers no toggle.
 */
export declare function createHarmonyTransport(options?: HarmonyTransportOptions): HttpTransport;
