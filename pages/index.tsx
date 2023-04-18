import Image from 'next/image'
import { Inter, Tilt_Prism } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tilt = Tilt_Prism({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4">
        <div className="">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/moneyhub_icon_white.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-8 grid text-center">
          <h1 className={`${tilt.className} mb-3 text-8xl font-semibold`}>
            Play Your Transactions Right
          </h1>
        </div>
        
        <div className="mb-8 grid text-center grid-cols-2 gap-8 w-full">
          <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
            Without Descriptions
          </button>
          <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
            Without Descriptions
          </button>
        </div>
      </div>
    </main>
  )
}
