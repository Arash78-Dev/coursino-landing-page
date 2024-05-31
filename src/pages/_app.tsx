import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const iranSansWeb = localFont({
  src: "./../../public/assets/fonts/IRANSansWeb.ttf",
});

const GlobalStyle = () => (
  <Global
    styles={`
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; 
      scrollbar-width: none;  
      scroll-behavior: smooth;
    `}
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <main className={iranSansWeb.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
