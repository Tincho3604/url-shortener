import { Request, Response } from 'express';


export class UrlController {

    static shortUrl = (req: Request, _: Response) => {
        const { url } = req.body;
        console.log(url);
    }
}