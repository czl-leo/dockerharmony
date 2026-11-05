import type { ExecuteContext } from './execute-context.js';
import type { RequestMessage, ResponseMessage } from '../transport/types.js';
import type { CreateMiddleware, ExecuteMiddleware } from './execute-middleware.js';
/** Middleware list in execution order, outermost first. Frozen after `apply()`. */
export declare class ExecuteStack {
    private readonly createTerminal;
    private readonly entries;
    private handler?;
    constructor(createTerminal: () => ExecuteMiddleware);
    /**
     * Appends innermost, just outside the terminal. `name` is a positioning key, not a debug label: the
     * three default names are part of the public contract.
     */
    push(create: CreateMiddleware, name: string): void;
    /** Places the new middleware *outside* `name`, so it runs first and sees the request earlier. */
    insertBefore(name: string, create: CreateMiddleware, newName: string): void;
    /** Places the new middleware *inside* `name`, so it sees whatever `name` did to the request. */
    insertAfter(name: string, create: CreateMiddleware, newName: string): void;
    /** Swaps the factory, keeping the position and the name. */
    replace(name: string, create: CreateMiddleware): void;
    /** Removes it and reports whether anything was there. */
    remove(name: string): boolean;
    /** Current order, outermost first. The default chain is `['Retryer', 'Signer', 'ResponseChecker']`. */
    names(): string[];
    apply(): void;
    /** Rejects when the stack has not been applied. */
    execute(request: RequestMessage, context: ExecuteContext): Promise<ResponseMessage>;
    private assertMutable;
    private assertNameFree;
    private requireIndexOf;
    private find;
}
