import { headers } from "next/headers"

import { cookieToInitialState } from "wagmi"

import { config } from "@/config"
import AppKitProvider from "@/context"

import { Web3Modal } from "../context/web3modal";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "@/styles/global.css";
import "@/styles/index.css";

export const metadata = {
  title: "Btab Wallet Connect",
  description: "Btab Wallet Connect Web3Modal + Web3Inbox",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))
  return (
    <html lang="en" suppressHydrationWarning className="bg-primary">
      <body>
        <AppKitProvider initialState={initialState}>
          <Web3Modal>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </Web3Modal>
        </AppKitProvider>
      </body>
    </html>
  );
}
