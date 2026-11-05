import type { XmlNode } from './parse.js';
/**
 * Escapes an object key for an XML request body. C0 controls become numeric references and invalid
 * XML 1.0 code points become the replacement character.
 */
export declare function escapeXmlKey(value: string): string;
/** Serialises the tree with an XML declaration in front, as OSS request bodies carry. */
export declare function buildXml(root: XmlNode): string;
