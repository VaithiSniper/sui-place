'use client'

import OrderBook from '@/components/order-book/table';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import '@mysten/dapp-kit/dist/index.css';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from "@/components/navbar/navbar"
import Plot from '@/components/plot/plot';

const queryClient = new QueryClient();
const networks = {
  devnet: { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
};


export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="devnet">
        <WalletProvider>
          <>
            <Navbar isPlace={true} />
          </>
          <>
            <div className="gap-4 gap-x-4 py-2 my-6 h-4 justify-center items-center text-center">
              <span className="text-4xl text-blue font-heading font-bold py-2">
                place
              </span>
            </div>
          </>
          <div className='grid grid-cols-8'>
            <div className="gap-4 gap-x-4 my-2 h-2 justify-center items-center text-center gap-y-4 space-y-4 py-4 col-start-4 col-end-6">
              <Plot />
            </div>
            <div className="gap-4 gap-x-4 my-2 h-2 justify-center items-center text-center gap-y-4 space-y-4 py-4 col-start-7 col-end-9 mr-6">
              <OrderBook />
            </div>
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}
