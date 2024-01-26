import { Router } from 'express'
import authController from '../controller'
import authMiddleware from '../middleware'

const authRouter = Router()

authRouter.get('/auth', authMiddleware.validateAuthTokens, authController.auth)

export default authRouter