import Express from 'express'
import Http from 'http'
import Config from './config'
import Database from './config/db'

const app: Express.Application = Express()
const server: Http.Server = Http.createServer(app)

Database.connect()

server
    .listen(
        Config.port,
        () => {
            console.log(`Server listening port`, Config.port)
        }
    )