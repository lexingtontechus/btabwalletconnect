import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const config = defaultWagmiConfig({
  projectId,
  chains: [mainnet, sepolia],
  metadata: {
    name: "Btab eCommerce",
    description: "",
    url: "https://www.btabdemo.lexingtontechus/",
    icons: ["/favicon.ico"],
  },
  enableInjected: true,
  enableWalletConnect: true,
  enableEIP6963: true,
  enableCoinbase: true,
  enableEmail: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
});
