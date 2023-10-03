import express from 'express'
import { URLController } from './controller/URLController.1'
import { MongoConnection } from './database/MongoConnection'

const app = express()
const PORT = 3000

app.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
