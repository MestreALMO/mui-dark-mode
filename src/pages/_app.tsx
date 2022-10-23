import type { AppProps } from "next/app";
import CtxThemeSelectedProvider from "@/context/CtxThemeSelected";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CtxThemeSelectedProvider>
        <Component {...pageProps} />
      </CtxThemeSelectedProvider>
    </>
  );
}

export default MyApp;
