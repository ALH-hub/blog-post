import express from 'express';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ greeting: 'Hello there!!!' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
