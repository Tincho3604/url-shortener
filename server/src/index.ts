
import { Application } from '../application/application';
import { Router } from '../router/router';
import { UrlController } from '../controllers/urlController';

// Se inicializa la app
const app = new Application();
const application = app.init();

// Se instancia el router
const router = new Router(application);


router.post('/short-url', UrlController.shortUrl);
