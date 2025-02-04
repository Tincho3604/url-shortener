import express, { RequestHandler} from 'express';

export class Router {
    private appplication: express.Application;

    constructor(app: express.Application) {
        this.appplication = app;
    }
  
    public get(url: string, callback: RequestHandler) {
      this.appplication.get(url, callback);
    }

    public post(url: string, callback: RequestHandler) {
        this.appplication.post(url, callback);
    }
};