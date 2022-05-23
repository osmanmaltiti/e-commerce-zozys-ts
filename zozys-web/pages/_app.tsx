import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Store from "../redux/store/Store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
