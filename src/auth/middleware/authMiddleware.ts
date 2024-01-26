import { RequestHandler } from "express";

type AuthMiddleware = {
    validateAuthTokens: RequestHandler
}

const authMiddleware: AuthMiddleware = {
    validateAuthTokens: (req, res, next) => {
        if (!req.headers.authorization && !req.cookies.Authorization) return next('You must login first.')

        return next()
    }
}

export default authMiddleware