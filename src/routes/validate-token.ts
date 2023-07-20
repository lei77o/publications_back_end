import { Request, Response, NextFunction } from "express";

const validateToken = (req: Request, res: Response, next: NextFunction) =>{
    next()
}

export default validateToken;