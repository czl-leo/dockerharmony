/** FIPS 180-4 SHA-1, used by OSS v1 signatures. */
export declare function sha1(data: Uint8Array): Uint8Array;
/** RFC 2104 over SHA-1. Produces the v1 signature. */
export declare function hmacSha1(key: Uint8Array, data: Uint8Array): Uint8Array;
