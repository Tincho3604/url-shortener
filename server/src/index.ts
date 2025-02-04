
import { Application } from '../application/application';

// Se inicia la app
const app = new Application();
const application = app.init();


application.post('/short-url', (req, _) => {
    const { url } = req.body;
    console.log(url)
});
