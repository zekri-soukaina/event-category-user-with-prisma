const notFoundErrorHandler = (err, req, ress, next) => {
  if (err.name === "NotFoundError") {
    return ress.status(404).json({ message: err.message });
  }
  next(err);
};

export default notFoundErrorHandler;
