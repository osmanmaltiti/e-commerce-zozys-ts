import jwt from 'jsonwebtoken';

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
