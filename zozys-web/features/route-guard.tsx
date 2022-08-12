import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const RouteGuard = (gssp: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;

    if (req.url?.includes("cart")) {
      return await gssp(context);
    }
    if (req.cookies) {
      const token = req.cookies.token;
      if (!token) {
        return {
          redirect: {
            permanent: false,
            destination: "/login",
          },
        };
      }
    }

    return await gssp(context);
  };
};
