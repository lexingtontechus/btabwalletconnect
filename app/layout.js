import { Analytics } from "@vercel/analytics/react";
import { Web3Modal } from "../context/web3modal";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/global.css";
import "/styles/index.css";
import { initWeb3InboxClient } from "@web3inbox/react";

// The project ID and domain you setup in the Domain Setup section
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;

initWeb3InboxClient({
  projectId,
  domain: appDomain,
  allApps: process.env.NODE_ENV !== "production",
});

export const metadata = {
  title: "Btab Wallet Connect",
  description: "Btab Wallet Connect Web3Modal + Web3Inbox",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-neutral">
      <body>
        <Web3Modal>
          <Providers>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </Providers>
        </Web3Modal>
      </body>
    </html>
  );
}
