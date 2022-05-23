import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { v4 } from 'uuid';
import { prisma } from '../index';

const did = v4();

interface ICreateDoor {
  name: string;
  type: string;
  dimension: string;
  price: number;
}

export const createDoor = async (doorData: ICreateDoor) => {
  const { name, type, dimension, price } = doorData;

  try {
    const newDoor = await prisma.door.create({
      data: {
        id: did,
        name,
        type,
        dimension,
        price,
      },
    });

    return {
      name: 'Success',
      data: newDoor,
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

export const getDoor = async () => {
  try {
    const doorData = await prisma.door.findMany();
    return {
      name: 'Success',
      data: doorData,
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
