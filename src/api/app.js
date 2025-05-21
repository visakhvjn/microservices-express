import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use((req, res, next) => {
	console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
	next();
});

app.use(
	'/todo',
	createProxyMiddleware({
		target: 'http://todo-service:3001',
		changeOrigin: true,
	})
);

app.use(
	'/user',
	createProxyMiddleware({
		target: 'http://user-service:3002',
		changeOrigin: true,
	})
);

app.listen(3000, () => {
	console.log('API Gateway running on port 3000');
});
