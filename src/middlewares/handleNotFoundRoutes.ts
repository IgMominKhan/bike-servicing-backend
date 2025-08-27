import { NextFunction, Request, Response } from "express";

const handleNotFoundRoutes = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: `${req.path} not found`
  })
}

export default handleNotFoundRoutes
