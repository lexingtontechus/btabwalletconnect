"use client"

import React from "react"
import { config, projectId, metadata } from "@/config"

import { createWeb3Modal } from "@web3modal/wagmi/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { WagmiProvider } from "wagmi"

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error("Project ID is not defined")

// Create modal
createWeb3Modal({
    metadata,
    wagmiConfig: config,
    projectId,
    includeWalletIds: [
        //  '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
        //  '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',//Metamask
        'e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b',//WalletConnect
        '8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3',//UD wallet
        '74eaefb87aa72ed25c7380c355878a617e114250a894b8699fa8b36708e07420',//UD dapp
        'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',//Coinbase
        '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',//Rainbow Wallet
    ],
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function Web3ModalProvider({ children, initialState }) {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}
