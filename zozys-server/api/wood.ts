import { Wood } from '@prisma/client';
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

export const getWood = async (filter: string) => {
  try {
    let items = Array();
    let stock: any = {};

    const woodData = await prisma.wood.findMany();

    const noDuplicates = (array: any, key: string) => [
      ...new Map(array.map((item: any) => [item[key], item])).values(),
    ];

    const filterParams = noDuplicates(woodData, filter) as Array<Wood>;
    const Filters = filterParams.map((item: any) => item[filter]);

    Filters.forEach((filters: string) => {
      const FilterByFilter = woodData.filter(
        (item: any) => item[filter] === filters
      );

      const itemParams = noDuplicates(FilterByFilter, 'name') as Array<Wood>;
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
