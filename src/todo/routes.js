import { Router } from 'express';

import { getTodos, addTodo } from './controllers/todo.controller.js';

const router = new Router();

router.get('/', getTodos);
router.post('/', addTodo);

export default router;
