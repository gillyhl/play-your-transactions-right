import Image from 'next/image'
import { Tilt_Prism } from 'next/font/google'
import {useRouter} from "next/router"
import useLocalStorage from "../hooks/use-local-storage"
import qs from "querystring"
import { useEffect } from 'react'

const tilt = Tilt_Prism({ subsets: ['latin'] })

export default function Callback() {
  const {query, isReady, push} = useRouter()
  const {getValue} = useLocalStorage()

  useEffect(() => {
    if (!isReady) return 
    const state = getValue("state")
    if (state !== query.state) {
      console.error("TUT TUT")
      return undefined
    }
    fetch(`/api/moneyhub/callback?${qs.stringify({
      ...query
    })}`)
    .then(() => {
      push("/game")
    })
  }, [getValue, query, isReady])

  return (
    <main className="container mx-auto">
      <div className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4">
        
      </div>
    </main>
  )
}
