import type { HttpTransport, HttpTransportOptions } from '../transport/types.js';
/** The OpenHarmony half of the swap; `default-transport.ts` states how the three files are selected. */
export declare function createDefaultTransport(options?: HttpTransportOptions): HttpTransport;
