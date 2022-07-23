import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const RouteGuard = (gssp: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;

    if (req.cookies) {
      const { token } = req.cookies;

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
