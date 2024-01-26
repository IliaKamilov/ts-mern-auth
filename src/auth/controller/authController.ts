import { NextFunction, Request, RequestHandler, Response } from "express"

type AuthController = {
    auth: (req: Request, res: Response, next: NextFunction) => void
}

const authController: AuthController = {
    auth: (req, res, next) => {
        console.log(req.headers.authorization)
    }
}

export default authController