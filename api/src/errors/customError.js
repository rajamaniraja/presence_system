

export default class ApplicationError extends Error {
    constructor(statusCode = 'E00001', description = 'DEFAULT_ERROR',status=500,critical = false) {
        // Calling parent constructor of base Error class.
        super(description);
        // Saving class name in the property of our custom error as a shortcut.
        this.statusCode = statusCode;
        this.description = description;
        this.critical = critical || false;
        this.status = status || 500;
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);
    }
};