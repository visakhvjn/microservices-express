import { userModel } from '../models/user.model.js';

export const getUsers = async () => {
	return userModel.find({});
};

export const addUser = async (data) => {
	return userModel.create(data);
};
