import { createHarmonyTransport } from './harmony/http.js';
/** The OpenHarmony half of the swap; `default-transport.ts` states how the three files are selected. */
export function createDefaultTransport(options) {
    return createHarmonyTransport(options);
}
//# sourceMappingURL=default-transport.harmony.js.map