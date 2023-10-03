import { URLModel } from '../model/URL'
import { Request, Response } from 'express'
import shortid from 'shortid'
import { config } from '../config/Constants'

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })
    if (url) {
      res.json(url)
      return
    }
    if (!url) {
      res.status(400).json({ error: 'Error' })
      return
    }

    const hash = shortid.generate()
    const shortURL = `${config.API_URL}/${hash}`
    const newUrl = await URLModel.create({ hash, originURL, shortURL })
    res.json(newUrl)
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params
    const url = await URLModel.findOne({ hash })

    if (url) {
      res.redirect(url.originURL)
      return
    }
    res.status(400).json({ error: 'URL not found' })
  }
}
