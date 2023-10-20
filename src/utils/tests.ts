import { Client, buildClient } from '@datocms/cma-client-node';
import { ItemType } from '@datocms/cma-client/dist/types/generated/SimpleSchemaTypes.js';

const baseApiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api`

type PreviewLink = {
  label: string
  url: string
}

type RevalidateResponse = {
  revalidated: boolean,
  paths: string[]
  delays: number
  event_type: string
}

type TestResult = {
  model: string
  previews?: PreviewLink[]
  revalidate?: RevalidateResponse
}

export async function testApiEndpoints() {

  const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN })
  const site = await client.site.find()

  console.log(`Testing site: ${site.name}`)

  const itemTypes = await client.itemTypes.list()
  const models = itemTypes.filter(t => !t.modular_block)

  const results = []

  for (let i = 0; i < models.length; i++) {
    const r: TestResult = { model: models[i].api_key }

    try {
      const previews = await testWebPreviewsEndpoint(models[i], client)
      if (previews.length > 0) {
        r.previews = previews
      }
    } catch (e) {

    }

    try {
      const revalidate = await testRevalidateEndpoint(models[i], client)
      if (revalidate.revalidated && revalidate.paths.length > 0)
        r.revalidate = revalidate

    } catch (e) {

    }
    results.push(r)
  }

  return results
}

export const testResultsToString = (results: TestResult[]) => {
  const tests = results.map(r => {
    return `${r.model} - Previews: ${r.previews ? 'YES' : 'NO'} / Revalidate: ${r.revalidate ? 'YES' : 'NO'}`
  }).join('\n')

  const previews = results.filter(r => r.previews).map(r => r.model).sort((a, b) => a > b ? 1 : -1).join('\n')
  const revalidate = results.filter(r => r.revalidate).map(r => r.model).sort((a, b) => a > b ? 1 : -1).join('\n')
  const nopreviews = results.filter(r => !r.previews).map(r => r.model).sort((a, b) => a > b ? 1 : -1).join('\n')
  const norevalidate = results.filter(r => !r.revalidate).map(r => r.model).sort((a, b) => a > b ? 1 : -1).join('\n')

  return `WEB PREVIEWS\n${previews}\n\nNO WEB PREVIEWS:\n${nopreviews}\n\nREVALIDATE\n${revalidate}\n\nNO REVALIDATE\n${norevalidate}`

}

const testWebPreviewsEndpoint = async (itemType: ItemType, client: Client): Promise<PreviewLink[]> => {

  const item = (await client.items.list({ filter: { type: itemType.api_key } }))[0]
  const res = await fetch(`${baseApiUrl}/web-previews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`)}`
    },
    body: JSON.stringify({
      item: {
        attributes: item || {}
      },
      itemType: {
        attributes: itemType
      },
      environmentId: "main",
      locale: "en"
    })
  })

  const json = await res.json()
  return json.previewLinks

}

const testRevalidateEndpoint = async (itemType: ItemType, client: Client): Promise<RevalidateResponse> => {

  const item = (await client.items.list({ filter: { type: itemType.api_key } }))[0]
  const res = await fetch(`${baseApiUrl}/api/revalidate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`)}`
    },
    body: JSON.stringify({
      "environment": "main",
      "entity_type": "item",
      "event_type": "update",
      "entity": {
        "id": item.id,
        "type": "item",
        "attributes": {
          ...item || {}
        },
        "relationships": {
          "item_type": {
            "data": {
              "id": itemType.id,
              "type": "item_type"
            }
          }
        },
        "meta": item.meta
      },
      "related_entities": [
        {
          "id": itemType.id,
          "type": "item_type",
          "attributes": itemType
        }
      ],
    })
  })

  const json = await res.json()
  return json
}