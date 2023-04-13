const { STATUS_CODES } = require('http');

class HttpError extends Error {
  constructor(status, message) {
    super(message || STATUS_CODES[status]);
    this.name = 'HttpError';
    this.status = status || 500;
  }
}

class AssertError extends HttpError {
  constructor(status, message) {
    super(status, message);
    this.name = 'AssertError';
  }
}

function assert(condition, status, message) {
  if (!condition) {
    throw new AssertError(status, message);
  }
}

function eguard(handler) {
  return async (req, res, ...params) => {
    res.assert = assert;

    try {
      return await handler(req, res, params);
    } catch (e) {
      let statusCode = 500;
      let message = STATUS_CODES[statusCode];
      if (e instanceof HttpError) {
        statusCode = e.status;
        message = e.message;
      }
      if (!(e instanceof AssertError)) {
        console.error(e);
      }
      
      return res.status(statusCode).json({
        statusCode,
        message,
      }).end();
    }
  };
}

module.exports = {
  eguard,
  assert,
};