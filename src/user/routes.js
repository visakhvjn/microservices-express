import { Router } from 'express';

import { getUsers, addUser } from './controllers/user.controller.js';

const router = new Router();

router.get('/', getUsers);
router.post('/', addUser);

export default router;
