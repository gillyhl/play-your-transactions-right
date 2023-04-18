import type { NextApiRequest, NextApiResponse } from 'next'
import config from "../../../modules/moneyhub/config"
import {parseCookies} from "nookies"
type Data = {
  transactions: any[]
}

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {access_token} = parseCookies({req})
  if (!access_token) {
    res.status(400).end()
  }

  const transactions = await fetch("https://api.moneyhub.co.uk/v2.0/transactions?limit=1000&creditDebitIndicator=debit", {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  .then(res => res.json())

  shuffleArray(transactions.data)

  res.status(200).send({transactions: transactions.data})
}
