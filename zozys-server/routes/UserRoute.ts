import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, getUser } from '../api/users';

const router = Router();

export const createToken = (id: string): string => {
  try {
    const token = jwt.sign({ data: id }, process.env.ACCESSTOKEN as string, {
      expiresIn: '4m',
    });
    return token;
  } catch (error) {
    return error as string;
  }
};

router.post('/create_user', async (req: Request, res: Response) => {
  const userdata = req.body;
  const newUser = await createUser(userdata);
  res.json({ newUser });
});

router.post('/login', async (req: Request, res: Response) => {
  const userdata = req.body;
  const currentUser = await getUser(userdata);
  const { name } = currentUser;

  name === 'Success'
    ? res.status(200).json(currentUser)
    : res.status(401).json(currentUser);
});

export default router;
