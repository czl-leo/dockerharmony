/** Whether the region is non-empty lowercase letters, digits and hyphens. */
export declare function isValidRegion(region: string): boolean;
/** Whether the bucket name is 3..63 lowercase letters, digits and hyphens, not hyphen-terminated. */
export declare function isValidBucketName(bucketName?: string): boolean;
/** A non-empty key of at most 1024 UTF-16 code units. */
export declare function isValidObjectName(objectName?: string): boolean;
/** Reports whether the hostname is an IP literal. Expects IPv6 brackets and the port to be stripped. */
export declare function isIpAddress(hostname: string): boolean;
