import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import ContextProvider from "@/context";
//import AppKitProvider from "@/context";
//import { Web3Modal } from "../context/web3modal";

import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "@/styles/global.css";

export const metadata = {
  title: "Btab Reown Demo",
  description: "Btab Reown Demo",
};

export default async function RootLayout({ children }) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  const headersData = await headers();
  const cookies = headersData.get("cookie");
  return (
    <html lang="en" suppressHydrationWarning data-theme="abyss">
      <body>
        <ContextProvider cookies={cookies}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
