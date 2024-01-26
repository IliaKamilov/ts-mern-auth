import Express from 'express'
import Http from 'http'
import Config from './config'

const app: Express.Application = Express()
const server: Http.Server = Http.createServer(app)

server
    .listen(
        Config.port,
        () => {
            console.log(`Server listening port`, Config.port)
        }
    )