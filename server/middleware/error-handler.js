export const errorHandlerMiddleware = (err, req, res, next) => {
  let error = {
    statusCode: err.statusCode || 500,
    msg: err.message || "terjadi error di server",
  };

  return res.status(error.statusCode).json({ msg: error.msg });
};
