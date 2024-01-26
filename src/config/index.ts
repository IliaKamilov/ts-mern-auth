import Dotenv from 'dotenv'

Dotenv.config()

const port = process.env.PORT ? parseInt(<string>process.env.PORT, 10) : 5000

const Config = {
    port
}

export default Config