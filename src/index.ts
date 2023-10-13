import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'
import 'dotenv/config'

const app = express()
const PORT = 3000

app.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
app.post('/shorten', urlController.shortenURL)
app.get('/:hash', urlController.redirectURL)
app.get('/', urlController.getAllURLs)
app.get('/url/:id', urlController.getShortenedURLById);
app.get('/urls/:date', urlController.getURLsByDate);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
