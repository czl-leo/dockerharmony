class HeaderFieldsImpl {
    constructor() {
        this.map = new Map();
    }
    get(name) {
        return this.map.get(name.toLowerCase())?.value;
    }
    set(name, value) {
        // Keyed by lowercase; the latest write sets both the value and its wire spelling.
        this.map.set(name.toLowerCase(), { name, value });
    }
    toRecord() {
        const out = {};
        this.map.forEach((entry) => {
            out[entry.name] = entry.value;
        });
        return out;
    }
    toNormalizedRecord() {
        const out = {};
        this.map.forEach((entry, lower) => {
            out[lower] = entry.value;
        });
        return out;
    }
}
/** Builds a fresh `HeaderFields`, copied from a record's own spellings. */
export function createHeaderFields(init) {
    const fields = new HeaderFieldsImpl();
    if (init === undefined)
        return fields;
    for (const name of Object.keys(init)) {
        const value = init[name];
        if (value !== undefined)
            fields.set(name, value);
    }
    return fields;
}
/** True when `headers` is a built `HeaderFields` rather than a plain record. */
export function isHeaderFields(headers) {
    return typeof headers?.toRecord === 'function';
}
//# sourceMappingURL=header-fields.js.map