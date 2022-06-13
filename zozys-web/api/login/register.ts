import axios from "axios";

export interface INewUser {
  name: string;
  email: string;
  number: string;
  location: string;
  password: string;
}

export const createUser: any = async (url: string, user: INewUser) => {
  if (user) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
      { ...user }
    );
    return res.data;
  }
};
