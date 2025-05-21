import * as userService from '../services/user.service.js';

export const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addUser = async (req, res) => {
	try {
		const user = await userService.addUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
