import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	createdAt: { type: Date, default: Date.now },
});

export const todoModel = mongoose.model('Todo', todoSchema);
