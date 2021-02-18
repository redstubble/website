import { log } from '.';

// Standard error extender from @deployable/errors
class ExtendedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        // @ts-ignore
        if (typeof Error.captureStackTrace === 'function') {
            // @ts-ignore
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
    }
}

export default class RethrownError extends ExtendedError {
    constructor(message: string, error: Error) {
        super(message);
        if (!error) {
            log.error('Unknown error', ['stack', this.stack]);
        }
        // @ts-ignore
        this.original = error;
        // @ts-ignore
        this.new_stack = this.stack;
        const message_lines = ((this.message || '').match(/\n/g) || []).length + 1;
        this.stack =
            // @ts-ignore
            this.stack
                .split('\n')
                .slice(0, message_lines + 1)
                .join('\n') +
            '\n' +
            error.stack;
        // utils.log.error('Session Building Error', ['stack', this.stack]);
    }
}
