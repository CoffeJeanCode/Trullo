import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface Payload {
  _id: string;
  iat: number;
  exp: number;
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("auth-token");

    if (!token) return res.send({ message: "token not valid o required" });

    const payload = jwt.verify(
      token,
      process.env.JWT_TOKEN ||
        "helloiamthesecretkeyforjwtanyoutshouldputinafile"
    ) as Payload;

    res.locals.userId = payload._id;

    next();
  } catch (e) {
    console.log(e);
  }
};
