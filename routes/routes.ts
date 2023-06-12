import { Router } from 'express';

const api = Router()
    .use(authController)
    .use(articleController)
    .use(profileController);

export default Router().use('/api', api);