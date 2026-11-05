/** FIPS 180-4 SHA-256. */
export declare function sha256(data: Uint8Array): Uint8Array;
/** RFC 2104 over SHA-256. Drives the v4 signing-key chain. */
export declare function hmacSha256(key: Uint8Array, data: Uint8Array): Uint8Array;
