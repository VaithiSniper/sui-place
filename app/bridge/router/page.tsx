'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-8 gap-4 gap-x-12 py-32 my-16 h-4">
      <div className="w-full col-start-2 col-end-4 justify-center">
        <span className="text-6xl font-heading py-2 tracking-wider">
          Bridge with &nbsp;
        </span>
        <span className="text-banner text-blue font-heading font-bold py-2">
          Router
        </span>
        <div className="font-reddit tracking-wide text-xl  w-full col-start-2 col-end-4 justify-center gap-x-12 space-x-12 justify-center items-center text-center">
          <span className="text-white">
            <Image src="/images/router/polygon.png" height={50} width={50} alt='Sui' className='inline' />
          </span>
          <span className="text-blue">
            <Image src="https://ethereum.org/static/eth-diamond-rainbow.svg" height={50} width={50} alt='Sui' className='inline' />
          </span>
        </div>
      </div>
      <div className="w-full col-start-5 col-end-8 h-full p-0 m-0">
        <Image src={"/images/minesweeper.png"} height={100} width={900} alt={"minesweeper"} />
      </div>
    </div >
  )
}
