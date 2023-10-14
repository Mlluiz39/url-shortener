import mongoose from 'mongoose'
import { config } from '../config/Constants'

interface ConnectOptions {
  bufferCommands?: boolean
  dbName?: string
  user?: string
  pass?: string
}

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION || 'mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      console.log('MongoDB Connected')
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}
