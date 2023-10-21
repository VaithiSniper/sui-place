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
                <div className="flex flex-col items-center my-10 py-10">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/login");
                    }}
                    type="button"
                    style={{
                      boxShadow: "0px 0px 0px 3px rgba(178,146,85,0.7)",
                    }}
                    className="glow-buttonblue flex items-center p-4 transition ease-in duration-200 uppercase rounded-full hover:bg-buttonblue hover:text-grey hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-cyan-900 focus:outline-none bg-white text-black gap-x-2 font-reddit"
                  >
                    Launch App
                    <Image
                      height={20}
                      width={20}
                      src="/images/sui_dark.svg"
                      alt="Wallet"
                      className={
                        "rounded-full border-blue justify-center text-center items-center"
                      }
                    />
                  </button>
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
