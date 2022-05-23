import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { v4 } from 'uuid';
import { prisma } from '../index';
import { createToken } from '../routes/UserRoute';

const uid = v4();

interface IUserData {
  name: string;
  email: string;
  location: string;
  number: number;
  password: string;
}

interface ILoginData {
  email: string;
  password: string;
}

const unsuccessful = {
  name: 'Error',
  data: { message: 'Invalid Username or Password' },
};

export const createUser = async (userData: IUserData) => {
  const { name, email, location, number, password } = userData;

  try {
    const createUser = await prisma.user.create({
      data: {
        id: uid,
        name,
        email,
        location,
        number,
        password,
      },
    });

    const token = createToken(createUser.id);
    return {
      name: 'Success',
      data: { createUser, token },
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          name: error.name,
          data: {
            message: `${error.meta?.target} already exists`,
          },
        };
      }
    }
  }
};

export const getUser = async (loginData: ILoginData) => {
  const { email, password } = loginData;

  const userdata = await prisma.user.findUnique({
    where: { email },
  });

  if (userdata) {
    if (userdata?.password === password) {
      const token = createToken(userdata.id);
      return {
        name: 'Success',
        data: { userdata, token },
      };
    } else {
      return unsuccessful;
    }
  } else {
    return unsuccessful;
  }
};
