/** Options `TextDecoder.create` accepts; only `ignoreBOM` is set here. */
export interface HarmonyTextDecoderOptions {
    ignoreBOM: boolean;
}
/** The one decoder method this module calls. */
export interface HarmonyTextDecoder {
    decodeToString(input: Uint8Array): string;
}
/** The one encoder method this module calls. */
export interface HarmonyTextEncoder {
    encodeInto(input: string): Uint8Array;
}
/** `util.TextDecoder`, reached through its static factory. */
export interface HarmonyTextDecoderCtor {
    create(encoding: string, options: HarmonyTextDecoderOptions): HarmonyTextDecoder;
}
/** `util.TextEncoder`, reached through its static factory. */
export interface HarmonyTextEncoderCtor {
    create(encoding: string): HarmonyTextEncoder;
}
/** The subset of `@ohos.util` this module uses. */
export interface HarmonyUtil {
    TextDecoder: HarmonyTextDecoderCtor;
    TextEncoder: HarmonyTextEncoderCtor;
}
/** Encodes a string as UTF-8. */
export declare function utf8Encode(input: string): Uint8Array;
/** Decodes UTF-8 bytes. */
export declare function utf8Decode(input: Uint8Array): string;
