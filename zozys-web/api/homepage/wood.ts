import axios from "axios";

export const getWood = async (url: string, filter: string) => {
  const res = await axios.get(`http://localhost:5000${url}`, {
    params: {
      filter,
    },
  });

  if (res.statusText !== "OK") {
    const error = new Error("Something went wrong. Retrying...");
    error.message = await res.data;
    error.name = res.statusText;
    throw error;
  }

  return res.data;
};
