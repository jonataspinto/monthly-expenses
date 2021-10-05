import axios from 'axios'
import { SheetRow, SheetSpendValue } from 'interfaces'

const sheetApi = axios.create({
  baseURL: `https://sheetdb.io/api/v1/${process.env.NEXT_PUBLIC_SHEET_DB_API_ID}`
})

export const fetchSheetColumns = async (
  sheetId = process.env.NEXT_PUBLIC_SHEET_ID
): Promise<Array<string>> => {
  const { data } = await sheetApi.get(`keys?sheet=${sheetId}`)

  return data
}

export const fetchSheetRows = async (
  sheetId = process.env.NEXT_PUBLIC_SHEET_ID
): Promise<Array<SheetRow>> => {
  const { data } = await sheetApi.get(`?sheet=${sheetId}`)

  return data
}

export const addSpend = async (
  sheetValue: SheetSpendValue,
  sheetId = process.env.NEXT_PUBLIC_SHEET_ID
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<{ data: any; status: number }> => {
  const { data, status } = await sheetApi.put(
    `/id/${sheetValue.id}?sheet=${sheetId}`,
    {
      [sheetValue.month]: sheetValue.value
    }
  )

  return { data, status }
}
