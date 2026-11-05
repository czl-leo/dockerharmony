export type MimeTypeMappings = Readonly<Record<string, string>>;
/** Adds extension-to-MIME mappings to the global user table. */
export declare function addMimeType(mappings: MimeTypeMappings): void;
/** Looks up the MIME type for a file or object name. */
export declare function lookupMimeType(name: string, defaultType?: string): string | undefined;
