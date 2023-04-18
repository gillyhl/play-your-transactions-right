import Image from 'next/image'
import { Tilt_Prism } from 'next/font/google'
import {useRouter} from "next/router"
import useLocalStorage from "../hooks/use-local-storage"
import qs from "querystring"
import { useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import nookies from "nookies"
import {Transactions} from "@mft/moneyhub-api-client"

type Props = {
  transactions: any[]
}

const pad = (str: number) => str.toString().padStart(2, "0")

export default function Callback() {
  const {getValue} = useLocalStorage()
  const [hasLoaded, setHasLoaded] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [score, setScore] = useState(0)
  const [id, setId] = useState(0)
  const loaded = useRef(false)
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true
      console.log("FETCH")
      fetch("/api/moneyhub/transactions")
        .then(res => res.json())
        .then(trx => {
          setTransactions(trx.transactions)
        })
        .finally(() => {
          setHasLoaded(true)
        })
    }
  }, [])

  const withDescription = useMemo(() => {
    return getValue("withDescription")
  }, [getValue])

  const onButtonPress = (isHigher: boolean) => () => {
    const transactionToCompare : Transactions.Transaction = transactions[id + 1]
    if (transaction.amount.value > transactionToCompare.amount.value && isHigher) {
      setScore((i) => i + 1)
    } else if (transaction.amount.value < transactionToCompare.amount.value && !isHigher) {
      setScore((i) => i + 1)
    }

    setId(i => i + 1)

    return 
  }

  const transaction: Transactions.Transaction = transactions[id]
  const amount = useMemo(() => {
    if (!transaction) {
      return ""
    }

    return `£${transaction.amount.majorUnits}.${pad(transaction.amount.minorUnits)}`
  }, [transaction])

  const isEnd = useMemo(() => {
    return transactions.length === id + 1
  }, [id, transactions])
  return (
    <main className="container mx-auto">
      {!hasLoaded &&
      <div className="flex flex-col items-center justify-between lg:p-24 p-4">
        <h1 className="text-2xl">Loading Game</h1>
      </div>}
      {hasLoaded && <>
        <div className="flex flex-col items-end justify-between lg:p-8 p-4">
          <section className="p-8 flex items-center">
            <p className="text-4xl font-semibold bg-white-100 mr-4">SCORE: </p>
            <p className="w-32 rounded-lg text-4xl text-yellow-500 font-semibold bg-blue-900 text-center py-4">{score}</p>
          </section>
        </div>
        <div className="flex flex-col items-center justify-between lg:p-8 p-4">
          <section className="bg-blue-900 w-full rounded-lg p-8 text-center">
            <p className="text-4xl text-yellow-500 font-semibold bg-blue-900">{amount}</p>
            {withDescription && <p className="text-xl text-yellow-500 font-semibold bg-blue-900">{transaction.longDescription}</p>}
          </section>
        </div>
        {!isEnd && 
        <div className="flex flex-col items-center justify-between lg:p-24 p-4">
        <div className="mb-8 grid text-center grid-cols-2 gap-8 w-full">
          <button 
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            onClick={onButtonPress(false)}>
            LOWER
          </button>
          <button 
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            onClick={onButtonPress(true)}>
            HIGHER
          </button>
        </div>
        </div>}
      </>
      }
    </main>
  )
}