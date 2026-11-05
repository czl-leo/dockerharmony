/**
 * Public-read access. Installing this provider is the only way to ask for unsigned requests:
 * `SignerMiddleware` tests for the class with `instanceof`, which does not see through a wrapper.
 */
export class AnonymousCredentialsProvider {
    getCredentials() {
        const credentials = { accessKeyId: '', accessKeySecret: '' };
        return Promise.resolve(credentials);
    }
}
//# sourceMappingURL=anonymous.js.map