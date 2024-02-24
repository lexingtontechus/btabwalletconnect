import { Web3Modal } from "../context/web3modal";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/global.css";
import "/styles/index.css";

import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import { config } from "/config";
import ContextProvider from "/context";

export const metadata = {
  title: "Btab Wallet Connect",
  description: "Btab Wallet Connect Web3Modal + Web3Inbox",
};
export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" suppressHydrationWarning className="bg-neutral">
      <body>
        <ContextProvider initialState={initialState}>
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
