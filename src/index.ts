import express, {Request, Response} from "express"
import { URLController } from "./controller/URLController"
import { MongoConnection } from "./database/MongoConnection"

const app = express()
const PORT = 5000

app.use(express.json())

const database = new MongoConnection()
database.connect()


const urlController = new URLController()
app.post("/shorten", urlController.shorten)
app.get("/:hash", urlController.redirect)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})