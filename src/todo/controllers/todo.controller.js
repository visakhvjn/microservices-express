import * as todoService from '../services/todo.service.js';

export const getTodos = async (req, res) => {
	try {
		const todos = await todoService.getTodos();
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addTodo = async (req, res) => {
	try {
		const user = await todoService.addTodo(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
