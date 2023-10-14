import 'dotenv/config'
import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const app = express()


app.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
app.post('/shorten', urlController.shortenURL)
app.get('/:hash', urlController.redirectURL)
app.get('/', urlController.getAllURLs)
app.get('/url/:id', urlController.getShortenedURLById);
app.get('/urls/:date', urlController.getURLsByDate);

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`)
})
