import Image from 'next/image'
import { Tilt_Prism } from 'next/font/google'
import {useRouter} from "next/router"
import useLocalStorage from "../hooks/use-local-storage"
import qs from "querystring"

const tilt = Tilt_Prism({ subsets: ['latin'] })

export default function Home() {
  const {query, push} = useRouter()
  const {getValue, setValue} = useLocalStorage()

  const onButtonClick = (withDescription: boolean) => () => {
    setValue("withDescription", withDescription)
    const state = `${new Date().getTime().toString()}${Math.random()}`
    setValue("state", state)
    fetch(`/api/moneyhub/connect?${qs.stringify({
      ...query,
      state
    })}`)
    .then(res => res.json())
      .then(res => {
        push(res.url)
      })

  }

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
          <button 
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            onClick={onButtonClick(false)}>
            Without Descriptions
          </button>
          <button 
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            onClick={onButtonClick(true)}>
            With Descriptions
          </button>
        </div>
      </div>
    </main>
  )
}
