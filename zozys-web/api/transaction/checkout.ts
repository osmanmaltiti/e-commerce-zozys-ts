import axios, { AxiosError } from "axios";

export const checkoutItem = async (url: any, transactionData: any) => {
  if (transactionData !== null) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
        transactionData
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
