import express from 'express';
import router from './routes.js';
import { connectDb } from './db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.use('/', router);

app.listen(3001, () => {
	console.log('Todo server is running on port 3001');
});
