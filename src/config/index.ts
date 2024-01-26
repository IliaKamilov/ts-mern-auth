import Dotenv from 'dotenv'

Dotenv.config()

const port = process.env.PORT ? parseInt(<string>process.env.PORT, 10) : 5000

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017'

const Config = {
    port,
    mongoUri
}

export default Config