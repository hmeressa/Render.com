class ErrorApi extends Error {
    constructor(message, code, status) {
        super();
        this.message = message,
            this.code = code,
            this.status = status
    }
}

module.exports = { ErrorApi }