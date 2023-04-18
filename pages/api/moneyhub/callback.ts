import type { NextApiRequest, NextApiResponse } from 'next'
import config from "../../../modules/moneyhub/config"
import {Moneyhub} from "@mft/moneyhub-api-client"
import {setCookie} from "nookies"
type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const moneyhub = await Moneyhub(config)
  const {code, state} = req.query

  const {access_token} = await moneyhub.exchangeCodeForTokens({
    localParams: {
      state,
    },
    paramsFromCallback: {
      code,
      state
    }
  })

  if (access_token) {
    console.log("ACCESS TOKEN", access_token)
    setCookie({res}, "access_token", access_token, {
      httpOnly: true,
    })
  }

  res.status(204).end()
}
