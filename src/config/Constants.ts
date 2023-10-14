import dotenv from 'dotenv'
dotenv.config();

export const config = {
  API_URL: process.env.API_URL,
  MONGO_CONNECTION: process.env.MONGO_CONNECTION || 'mongodb://localhost:27017',
}
