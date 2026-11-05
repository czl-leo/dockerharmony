import type { ByteContent, ByteSource } from '../../transport/types.js';
/** A `@ohos.file.fs` file handle; only its descriptor is read here. */
export interface HarmonyFile {
    fd: number;
}
/** As much of a `@ohos.file.fs` `Stat` as `fileBody` reads. */
export interface HarmonyStat {
    size: number;
}
/** The one `@ohos.file.fs` `OpenMode` member this module names. */
export interface HarmonyOpenMode {
    readonly READ_ONLY: number;
}
/** The positional `read` options this module passes: a file `offset` and a byte `length`. */
export interface HarmonyReadOptions {
    offset?: number;
    length?: number;
}
/**
 * The subset of `@ohos.file.fs` this module uses. `read`'s `offset` is a position in the file,
 * not in the buffer.
 */
export interface HarmonyFileFs {
    open(path: string, mode?: number): Promise<HarmonyFile>;
    read(fd: number, buffer: ArrayBuffer, options?: HarmonyReadOptions): Promise<number>;
    close(file: number | HarmonyFile): Promise<void>;
    stat(path: string): Promise<HarmonyStat>;
    OpenMode: HarmonyOpenMode;
}
/**
 * A file-backed, replayable body for OpenHarmony. Each `source()` opens a fresh `@ohos.file.fs` handle
 * over the byte range `[offset, offset + length)` and walks it in `CHUNK_BYTES` reads. A cursor read to
 * `null` closes its handle; one abandoned earlier is closed by `cancel`.
 */
export declare class FileContent implements ByteContent {
    readonly oneShot = false;
    readonly path: string;
    readonly offset: number;
    readonly length: number;
    constructor(path: string, offset: number, length: number);
    source(): ByteSource;
}
/** Which byte range of a file to send: `offset` defaults to the start, `length` to the rest. */
export interface FileBodyOptions {
    offset?: number;
    length?: number;
}
/**
 * Builds a `FileContent`, stat-ing the file to learn the length when one is not given. `offset`
 * defaults to the start, `length` to the rest of the file from `offset`.
 */
export declare function fileBody(path: string, options?: FileBodyOptions): Promise<FileContent>;
