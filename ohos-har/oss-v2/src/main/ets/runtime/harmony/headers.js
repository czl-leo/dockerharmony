/** Normalizes a platform header map to a lowercased `Record<string, string>`. */
export function normalizeHeaders(raw) {
    const headers = {};
    for (const name of Object.keys(raw)) {
        const value = raw[name];
        if (value === undefined)
            continue;
        const lower = name.toLowerCase();
        if (typeof value === 'string')
            headers[lower] = value;
        else if (typeof value === 'number')
            headers[lower] = String(value);
        else
            headers[lower] = value.join(', ');
    }
    return headers;
}
//# sourceMappingURL=headers.js.map