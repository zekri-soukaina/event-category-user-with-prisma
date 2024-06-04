// goal will be to log some information about every request.

import logger from "../utils/log.js";

// A middleware should be a method that takes req, res, and next as arguments.
const log = (req, res, next) => {
  const start = new Date();

  next();

  const ms = new Date() - start;
  logger.info(
    `${req.method} ${req.originalUrl}. Status: ${res.statusCode}. Duration: ${ms} ms`
  );
};

export default log;
