import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { createToken } from '../helpers/createToken';
import { prisma } from '../index';

const uid = v4();

interface IUserData {
  name: string;
  email: string;
  location: string;
  number: string;
  password: string;
}

interface ILoginData {
  email: string;
  password: string;
}

const unsuccessful = {
  name: 'Failed',
  message: 'Invalid Username or Password',
};

export const createUser = async (req: Request, res: Response) => {
  const userdata = req.body as unknown as IUserData;

  const { name, email, location, number, password } = userdata;

  try {
    const createUser = await prisma.user.create({
      data: {
        id: uid,
        name,
        email,
        location,
        password,
        number,
      },
    });

    const token = createToken(createUser.id);

    res
      .status(200)
      .json({ name: 'Success', userdata: { userInfo: createUser, token } });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        res.status(400).json({ name: 'failed', message: error.message });
      }
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userdata = req.body as unknown as ILoginData;

  const { email, password } = userdata;

  const userData = await prisma.user.findUnique({
    where: { email },
  });

  if (userData) {
    if (userData?.password === password) {
      const token = createToken(userData.id);
      res
        .status(200)
        .json({ name: 'Success', userdata: { userInfo: userData, token } });
    } else {
      res.status(400).json(unsuccessful);
    }
  } else {
    res.status(400).json(unsuccessful);
  }
};
