import { SheetRow, SheetSpendValue } from 'interfaces'
import { useEffect, useState } from 'react'
import { addSpend, fetchSheetRows } from 'services'

export const useHandlers = () => {
  const [sheetRows, setSheetRows] = useState<Array<SheetRow>>([])
  const [sheetValue, setSheetValue] = useState<SheetSpendValue>({
    id: '',
    value: '',
    month: ' '
  })
  const [prevMonthSendValue, setPrevMonthSendValue] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [savedSpendList, setSavedSpendList] = useState<Array<SheetSpendValue>>(
    []
  )

  const handleLoadSheetData = async () => {
    setStatus('loading')
    const data = await fetchSheetRows('Cópia de Gastos 2022')
    setSheetRows(data)
    setStatus('')
  }

  const handleSelectSpedId = (id: string) => {
    setSheetValue((prevState) => ({ ...prevState, id }))
  }

  const handleGuardPrevMonthSendValue = () => {
    const monthData = sheetRows.find((row) => row.id === sheetValue.id)

    if (monthData) {
      const monthValue = monthData[sheetValue.month]
        ? monthData[sheetValue.month].split(' ')[1]
        : '0'
      setPrevMonthSendValue(monthValue)
    }
  }

  const handleSelectMonth = (month: string) => {
    setSheetValue((prevState) => ({ ...prevState, month }))
  }

  const handleChangeSendValue = (value: string) => {
    setSheetValue((prevState) => ({ ...prevState, value }))
  }

  const handleSubmit = async (sheetValue: SheetSpendValue) => {
    setStatus('loading')

    const parserdValue = sheetValue?.value?.includes(',')
      ? sheetValue.value.replace(',', '.')
      : sheetValue.value
    const parsedPrevMonthSendValue = prevMonthSendValue.includes(',')
      ? prevMonthSendValue.replace(',', '.')
      : prevMonthSendValue

    const sum = (
      parseFloat(parserdValue as string) + parseFloat(parsedPrevMonthSendValue)
    ).toFixed(2)

    const response = await addSpend({
      ...sheetValue,
      value: sum.replace('.', ',')
    })
    console.log('RESPOSTA:', response)

    if (response.status === 200) {
      handleLoadSheetData()
      setSavedSpendList((prevState) => [
        ...prevState,
        { ...sheetValue, value: parserdValue }
      ])
      setSheetValue({
        id: '',
        value: '',
        month: ' '
      })
    }
    setStatus('')
  }

  useEffect(() => {
    handleLoadSheetData()
  }, [])

  useEffect(() => {
    handleGuardPrevMonthSendValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetValue.month])

  return {
    handleSelectSpedId,
    handleGuardPrevMonthSendValue,
    handleSelectMonth,
    handleChangeSendValue,
    handleSubmit,
    sheetRows,
    setSheetRows,
    sheetValue,
    setSheetValue,
    savedSpendList,
    status
  }
}
