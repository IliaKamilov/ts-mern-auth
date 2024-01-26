import Mongoose from 'mongoose'
import Config from '.'

const Database = {
    connect: () => {
        return Mongoose
            .connect(Config.mongoUri)
            .then(() => console.log(`Mongo database connected.`))
            .catch(error => console.log(`Mongo Error`, error.message))
    }
}

export default Database