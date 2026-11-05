/** Which family of hostnames to derive from a region. */
export type EndpointType = 'public' | 'internal' | 'dualstack' | 'accelerate';
/** An endpoint split into the parts the URL builder and the addressing rules need. */
export interface ParsedEndpoint {
    /** `http` or `https`. */
    scheme: string;
    /** Host as written, port and IPv6 brackets included. Goes into the URL. */
    host: string;
    /** Host without port or brackets. Used only to decide whether the endpoint is an IP. */
    hostname: string;
}
/**
 * Parses an endpoint, returning `undefined` for anything unusable so the caller can raise a config
 * error rather than address a nonsense host.
 */
export declare function parseEndpoint(endpoint: string, defaultScheme: string): ParsedEndpoint | undefined;
/** The default endpoint for a region, `<scheme>://<host>` with no path. */
export declare function endpointFromRegion(region: string, type: EndpointType, scheme: string): string;
