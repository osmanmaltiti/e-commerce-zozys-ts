import { Door } from '@prisma/client';
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

export const getDoor = async (filter: string) => {
  try {
    let items = Array();
    let stock: any = {};

    const doorData = await prisma.door.findMany();

    const noDuplicates = (array: any, key: string) => [
      ...new Map(array.map((item: any) => [item[key], item])).values(),
    ];

    const filterParams = noDuplicates(doorData, filter) as Array<Door>;
    const Filters = filterParams.map((item: any) => item[filter]);

    Filters.forEach((filters: string) => {
      const FilterByFilter = doorData.filter(
        (item: any) => item[filter] === filters
      );

      const itemParams = noDuplicates(FilterByFilter, 'name') as Array<Door>;
      const Items = itemParams.map((item: any) => item.name);

      Items.forEach((name: string) => {
        const filterByName = FilterByFilter.filter(
          (item: any) => item.name === name
        );
        stock = { ...stock, [name]: filterByName.length };
      });

      const mapping = itemParams.map((item: any) => {
        return {
          ...item,
          stock: stock[item.name],
        };
      });

      const finalQuery = { filter: filters, data: mapping };
      items = [...items, finalQuery];
    });

    return {
      name: 'Success',
      items,
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
