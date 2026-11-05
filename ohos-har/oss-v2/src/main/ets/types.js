/** How the bucket is addressed. Any value that is not one of these is addressed as `VIRTUAL_HOSTED`. */
export var UrlStyleType;
(function (UrlStyleType) {
    UrlStyleType[UrlStyleType["VIRTUAL_HOSTED"] = 0] = "VIRTUAL_HOSTED";
    UrlStyleType[UrlStyleType["PATH"] = 1] = "PATH";
    UrlStyleType[UrlStyleType["CNAME"] = 2] = "CNAME";
})(UrlStyleType || (UrlStyleType = {}));
/** Bitmask values for SDK features a client may enable. */
export var FeatureFlagsType;
(function (FeatureFlagsType) {
    FeatureFlagsType[FeatureFlagsType["AUTO_DETECT_MIME_TYPE"] = 1] = "AUTO_DETECT_MIME_TYPE";
})(FeatureFlagsType || (FeatureFlagsType = {}));
//# sourceMappingURL=types.js.map