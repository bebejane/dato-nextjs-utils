import { TypedDocumentNode } from '@apollo/client/core/core.cjs';
import { useEffect, useState, useCallback } from "react";
import { apiQuery } from '../api/index.js';

export type UseApiQueryProps = {
  variables?: any
  initialData?: any
  pageSize?: number
  preview?: boolean
}

export type Pagination = {
  no: number,
  count: number,
  size: number,
  end: boolean
}

const useApiQuery = <T>(document: TypedDocumentNode, { variables, initialData, pageSize, preview = false }: UseApiQueryProps = {}) => {

  const [initial, setInitial] = useState<T>(initialData)
  const [data, setData] = useState<T>(initialData)
  const [page, setPage] = useState<Pagination | undefined>(pageSize ? {
    no: 1,
    count: initialData.pagination?.count || 0,
    size: pageSize,
    end: initialData.pagination?.count > 0 ? initialData.pagination?.count <= pageSize : false
  } : undefined)
  const [error, setError] = useState<Error | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (JSON.stringify(initialData) !== JSON.stringify(initial)) {
      setData(initialData)
      setInitial(initialData)
    }
  }, [initialData])

  const loadMore = (vars: any) => load(vars)

  const load = useCallback((vars?: any) => {
    setLoading(true)

    return apiQuery(document, { variables: { ...variables, ...vars }, preview })
      .then(res => {
        const d = mergeData(res, data)
        setData(d)
        return d
      })
      .finally(() => setLoading(false))

  }, [document, variables, data])

  const nextPage = useCallback(async () => {
    if (!page)
      return setError(new Error('No page size set!'))

    const first = page.size
    const skip = page.no * page.size

    if (skip > page.count && page.count > 0)
      return page

    try {
      const d = await load({ ...variables.variables, first, skip })
      const count = d[Object.keys(d).find(k => !isNaN(d[k].count))]?.count || 0;
      const no = page.no + 1
      const end = no * pageSize >= count
      const p = { ...page, no, count, end }

      setPage(p)
      return p;

    } catch (err) {
      setError(err)
      return page;
    }
  }, [page, variables, pageSize, setPage, setError, load])

  const mergeData = (newData, oldData) => {

    if (!oldData || !newData) return newData

    Object.keys(newData).forEach(k => {
      if (oldData[k] && Array.isArray(oldData[k]))
        newData[k] = oldData[k].concat(newData[k])
    })

    return newData;
  }

  useEffect(() => { !initialData && load() }, [initialData, load])

  return { data, error, loading, loadMore, nextPage, page }
};

export default useApiQuery