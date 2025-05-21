import { todoModel } from '../models/todo.model.js';

export const addTodo = async (data) => {
	return todoModel.create(data);
};

export const getTodos = async () => {
	return todoModel.find({});
};
