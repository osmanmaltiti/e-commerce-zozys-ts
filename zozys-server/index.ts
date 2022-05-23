import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import Express, { Application } from 'express';
import DoorRoute from './routes/DoorRoute';
import UserRoute from './routes/UserRoute';
import WoodRoute from './routes/WoodRoute';

dotenv.config({
  path: './.env',
});

const app: Application = Express();
app.use(Express.json());
app.use(cors());

app.use('/api/user', UserRoute);
app.use('/api/wood', WoodRoute);
app.use('/api/door', DoorRoute);

const port = process.env.PORT || 5000;
export const prisma = new PrismaClient();

const boot = (): void => {
  try {
    app.listen(port, () => console.log('Server is listening on port 5000'));
  } catch (error) {
    console.log(error);
  }
};

boot();
