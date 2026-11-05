// OpenHarmony UTF-8 codec backed by `@ohos.util`.
import util from '@ohos.util';
const encoder = util.TextEncoder.create('utf-8');
const decoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });
/** Encodes a string as UTF-8. */
export function utf8Encode(input) {
    // `encodeInto('')` returns undefined on device.
    if (input.length === 0)
        return new Uint8Array(0);
    return encoder.encodeInto(input);
}
/** Decodes UTF-8 bytes. */
export function utf8Decode(input) {
    // Empty input returns undefined on device.
    if (input.length === 0)
        return '';
    return decoder.decodeToString(input);
}
//# sourceMappingURL=text-codec.harmony.js.map