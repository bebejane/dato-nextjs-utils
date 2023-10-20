import type { NextApiRequest, NextApiResponse } from 'next'
import { testApiEndpoints, testResultsToString } from '../utils/tests.js'

export default async function withTests(req: NextApiRequest, res: NextApiResponse) {
  const results = await testApiEndpoints()
  res.status(200).send(testResultsToString(results))
}


