import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorMsg = err.message || `Something went wrong try again`;
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: errorMsg });
};
export { errorHandlerMiddleware };
