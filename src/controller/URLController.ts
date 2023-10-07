import { URLModel } from '../model/URL'
import { Request, Response } from 'express'
import shortid from 'shortid'
import { config } from '../config/Constants'

export class URLController {
  public async shortenURL(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })

    async (params: string) => {
      if (url) {
        res.json(url)
        return
      }
      if (!url) {
        res.status(400).json({ error: 'Error' })
        return
      }
    }

    const hash = shortid.generate()
    const shortURL = `${config.API_URL}/${hash}`
    const createdAt = new Date()
    const newUrl = await URLModel.create({ hash, originURL, shortURL, createdAt })
    res.json(newUrl)
  }

  public async redirectURL(req: Request, res: Response): Promise<void> {
    const { hash } = req.params
    const url = await URLModel.findOne({ hash })

    if (url) {
      res.redirect(url.originURL)
      return
    }
    res.status(400).json({ error: 'URL not found' })
  }

  public async getAllURLs(req: Request, res: Response): Promise<void> {
    try {
      const urls: string[] = await URLModel.find()
      res.json(urls)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  public async getShortenedURLById(req: Request, res: Response): Promise<void> {
    const { id } = req.params 
    const url = await URLModel.findOne({ id })

    if (url) {
      res.json(url)
    } else {
      res.status(404).json({ error: 'URL not found' })
    }
  }

  public async getURLsByDate(req: Request, res: Response): Promise<void> {
    const { date } = req.params 
    const urls = await URLModel.find({ createdAt: { $gte: new Date(date) } })

    if (urls.length > 0) {
      res.json(urls)
    } else {
      res.status(404).json({ error: 'No URLs found for the specified date' })
    }
  }
}
