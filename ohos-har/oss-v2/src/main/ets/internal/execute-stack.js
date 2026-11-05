import { OssError } from '../error/types.js';
/** Middleware list in execution order, outermost first. Frozen after `apply()`. */
export class ExecuteStack {
    constructor(createTerminal) {
        this.createTerminal = createTerminal;
        this.entries = [];
    }
    /**
     * Appends innermost, just outside the terminal. `name` is a positioning key, not a debug label: the
     * three default names are part of the public contract.
     */
    push(create, name) {
        this.assertMutable();
        this.assertNameFree(name);
        this.entries.push({ create, name });
    }
    /** Places the new middleware *outside* `name`, so it runs first and sees the request earlier. */
    insertBefore(name, create, newName) {
        this.assertMutable();
        const at = this.requireIndexOf(name);
        this.assertNameFree(newName);
        this.entries.splice(at, 0, { create, name: newName });
    }
    /** Places the new middleware *inside* `name`, so it sees whatever `name` did to the request. */
    insertAfter(name, create, newName) {
        this.assertMutable();
        const at = this.requireIndexOf(name);
        this.assertNameFree(newName);
        this.entries.splice(at + 1, 0, { create, name: newName });
    }
    /** Swaps the factory, keeping the position and the name. */
    replace(name, create) {
        this.assertMutable();
        this.entries[this.requireIndexOf(name)] = { create, name };
    }
    /** Removes it and reports whether anything was there. */
    remove(name) {
        this.assertMutable();
        const at = this.find(name);
        if (at < 0)
            return false;
        this.entries.splice(at, 1);
        return true;
    }
    /** Current order, outermost first. The default chain is `['Retryer', 'Signer', 'ResponseChecker']`. */
    names() {
        return this.entries.map((entry) => entry.name);
    }
    apply() {
        this.assertMutable();
        let next = this.createTerminal();
        for (let i = this.entries.length - 1; i >= 0; i -= 1) {
            next = this.entries[i].create(next);
        }
        this.handler = next;
    }
    /** Rejects when the stack has not been applied. */
    execute(request, context) {
        const handler = this.handler;
        if (handler === undefined) {
            return Promise.reject(new OssError('the execute stack has not been applied'));
        }
        return handler.execute(request, context);
    }
    assertMutable() {
        if (this.handler !== undefined) {
            throw new OssError('the execute stack has already been applied and cannot be modified');
        }
    }
    assertNameFree(name) {
        if (this.find(name) >= 0) {
            throw new OssError('duplicate middleware name in the execute stack: ' + name);
        }
    }
    requireIndexOf(name) {
        const at = this.find(name);
        if (at < 0)
            throw new OssError('no middleware named ' + name + ' in the execute stack');
        return at;
    }
    find(name) {
        for (let i = 0; i < this.entries.length; i += 1) {
            if (this.entries[i].name === name)
                return i;
        }
        return -1;
    }
}
//# sourceMappingURL=execute-stack.js.map