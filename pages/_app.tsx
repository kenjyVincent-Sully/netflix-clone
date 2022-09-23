import { QuickViewProvider } from "../context/QuickViewContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuickViewProvider>
      <Component {...pageProps} />
    </QuickViewProvider>
  );
}

export default MyApp;
