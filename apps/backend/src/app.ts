import express from 'express';
import authRouter from './routes/auth.route';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);

app.use(helmet());
app.use(cors({
  origin: true,
  credentials: true
}));
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Incoming: ${req.method} ${req.url}`);
  next();
});

app.use('/api/auth', authRouter);

export default app;
