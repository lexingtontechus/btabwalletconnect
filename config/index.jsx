import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"

import { cookieStorage, createStorage } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error("Project ID is not defined")

export const metadata = {
    name: "BTAB",
    description: "Web3 Technology",
    url: "https://btabcorp.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"]
}

// Create wagmiConfig
const chains = [mainnet, sepolia]
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
})