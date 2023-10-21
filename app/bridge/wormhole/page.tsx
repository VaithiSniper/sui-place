"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import WormholeBridge from "@wormhole-foundation/wormhole-connect";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-8 gap-4 gap-x-12 py-32 my-16 h-4">
      <div className="w-full col-start-2 col-end-5 justify-center">
        <span className="text-6xl font-heading py-2 ml-8 tracking-wider inline-block">
          Bridge with
        </span>
        <span className="text-7xl ml-8 text-blue font-heading font-bold py-2">
          Wormhole
        </span>{" "}
        <div className="w-full justify-left gap-x-12 space-x-12 items-left text-center">
          <span>
            <Image src="/images/wormhole/solana.svg" height={50} width={50} alt='Sui' className='inline' />
          </span>
          <span>
            <Image src="https://ethereum.org/static/eth-diamond-rainbow.svg" height={50} width={50} alt='Sui' className='inline' />
          </span>
          <span>
            <Image height={80} width={80} alt="Arbitrum" className="inline" src="https://file.notion.so/f/s/97cbcc18-c036-4fce-a565-96763ee4043f/arbitrum-shield.svg?id=924fe923-19f3-4938-afdd-53fb143ee4d0&table=block&spaceId=80206c3c-8bc5-49a2-b0cd-756884a06880&expirationTimestamp=1697947200000&signature=pMCIEQ9Sd2tkBc0sDv6mSi7fYE_07U0d4zf6KrVSD9U&downloadName=arbitrum-shield.svg" />
          </span>
          <span>
            <Image height={70} width={70} alt="Avalanche" className="inline" src="/images/wormhole/avalanche.svg" />
          </span>
        </div>

      </div>
      <div className="w-full col-start-5 col-end-8 justify-center mt-0 pt-0 top-0">
        <WormholeBridge />
      </div>
    </div>
  );
}
