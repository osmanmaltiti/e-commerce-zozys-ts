import axios, { AxiosError } from "axios";

export interface INewUser {
  name: string;
  email: string;
  number: string;
  location: string;
  password: string;
}

export const createUser: any = async (url: string, user: INewUser) => {
  if (user) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
        { ...user }
      );
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        throw response && response.data;
      }
    }
  }
};
