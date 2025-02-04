import express from 'express';
import cors from 'cors';

export class Application {
    private app: express.Application = express();
    constructor() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    public init(): express.Application  {
        this.app.listen(3000, () => {
            console.log(`Escuchando en el puerto ${3000}`);
        });
        return this.app;
    }
};