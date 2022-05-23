import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { v4 } from 'uuid';
import { prisma } from '../index';

const wid = v4();

interface ICreateWood {
  name: string;
  type: string;
  dimension: string;
  price: number;
}

export const createWood = async (woodData: ICreateWood) => {
  const { name, type, dimension, price } = woodData;

  try {
    const newWood = await prisma.wood.create({
      data: {
        id: wid,
        name,
        type,
        dimension,
        price,
      },
    });

    return {
      name: 'Success',
      data: newWood,
    };
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError ||
      error instanceof PrismaClientValidationError
    ) {
      return {
        name: error.name,
        data: error.message,
      };
    }
  }
};

export const getWood = async () => {
  try {
    const woodData = await prisma.wood.findMany();
    return {
      name: 'Success',
      data: woodData,
    };
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError ||
      error instanceof PrismaClientValidationError
    ) {
      return {
        name: error.name,
        data: error.message,
      };
    }
  }
};
