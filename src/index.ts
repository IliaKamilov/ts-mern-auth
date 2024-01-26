import Express from 'express'
import Http from 'http'
import Config from './config'
import Database from './config/db'
import CookieParser from 'cookie-parser'
import Cors from 'cors'

const app: Express.Application = Express()

app.use(CookieParser())
app.use(Express.json())
app.use(Cors({
    origin: ['http://localhost:3000','http://10.0.0.8:3000'],
    credentials: true
}))

const server: Http.Server = Http.createServer(app)

Database.connect()

server
    .listen(
        Config.port,
        () => {
            console.log(`Server listening port`, Config.port)
        }
    )