import axios from "axios";

export interface IUser {
  email: string;
  password: string;
}

export const getUser = async (url: string, user: IUser) => {
  if (user) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
      { ...user }
    );

    return res.data;
  }
};
