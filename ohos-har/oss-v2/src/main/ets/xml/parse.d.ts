/** One element: its name, its concatenated text, and its child elements. */
export interface XmlNode {
    name: string;
    text: string;
    children: XmlNode[];
}
/**
 * Parses the XML subset OSS returns: elements, text, CDATA, comments, entities. Attributes are
 * skipped, namespaces are not resolved, and a `>` inside an attribute value is not supported.
 */
export declare function parseXml(raw: string): XmlNode;
/** The first child with that name, or undefined. */
export declare function childOf(node: XmlNode, name: string): XmlNode | undefined;
/** Every child with that name, in document order. */
export declare function childrenOf(node: XmlNode, name: string): XmlNode[];
/** Trimmed text of the named child, or undefined when the child is absent. */
export declare function textOf(node: XmlNode, name: string): string | undefined;
