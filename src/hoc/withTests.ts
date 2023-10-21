import type { NextApiRequest, NextApiResponse } from 'next'
import { testApiEndpoints, testResultsToHtml, testResultsToString } from '../utils/tests.js'

export default async function withTests(req: NextApiRequest, res: NextApiResponse) {
  const results = await testApiEndpoints()
  if (req.query?.html)
    res.status(200).send(testResultsToHtml(results))
  else if (req.query?.json)
    res.status(200).json(results)
  else
    res.status(200).send(testResultsToString(results))
}


