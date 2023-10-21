'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import '@mysten/dapp-kit/dist/index.css';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from "@/components/navbar/navbar"

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
            <div className="grid grid-cols-8 gap-4 gap-x-12 py-32 my-16 h-4">
              <div className="w-full col-start-2 col-end-4 justify-center">
                <span className="text-banner text-blue font-heading font-bold py-2">
                  place
                </span>
                <div className="font-reddit tracking-wide text-xl  w-full col-start-2 col-end-4 justify-center">
                  <span className="text-white">
                    Buy. &nbsp;
                  </span>
                  <span className="text-blue">
                    Conquer. &nbsp;
                  </span>
                  <span className="text-white">
                    Grow. &nbsp;
                  </span>
                  <span className="text-blue">
                    As a team. &nbsp;
                  </span>
                </div>
              </div>
              <div
                className="w-full col-start-5 col-end-8 h-full p-0 m-0"
              >
                <Image src={"/images/minesweeper.png"} height={100} width={900} alt={"minesweeper"} />
              </div>
            </div >
          </>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}
