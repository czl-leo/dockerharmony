/** The repo name minus `oss-`. */
export declare const SDK_NAME = "alibabacloud-ts-sdk-v2";
/** Must equal `version` in package.json; `tests/unit/utils/user-agent.test.ts` enforces it. */
export declare const SDK_VERSION = "0.1.0-alpha.0";
/** Builds `<name>/<version> (<platform>)/<extra>`. The suffix is appended. */
export declare function buildUserAgent(platform?: string, extra?: string): string;
