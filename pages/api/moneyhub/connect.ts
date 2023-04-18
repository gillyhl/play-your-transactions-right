import type { NextApiRequest, NextApiResponse } from 'next'
import config from "../../../modules/moneyhub/config"
import {Moneyhub} from "@mft/moneyhub-api-client"
type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const moneyhub = await Moneyhub(config)
  const {type, state} = req.query

  const authUrl = await moneyhub.getAuthorizeUrl({
    scope: `openid id:${type || "api"} transactions:read:all`,
    state: state && String(state),
  })

  res.status(200).json({ url: authUrl })
}
