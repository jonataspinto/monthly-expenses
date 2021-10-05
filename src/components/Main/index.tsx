import { ReactNode } from 'react'
import * as S from './styles'
import { useHandlers } from './handlers'
import { Card } from 'components/Card'
import { Button } from 'components/Button'
import { SavedSpendList } from 'components/SavedSpendList'

type Props = {
  title?: string
  description?: string
  children?: ReactNode
}

const Main = ({ title, description }: Props) => {
  const {
    handleChangeSendValue,
    handleSelectMonth,
    handleSelectSpedId,
    handleSubmit,
    sheetRows,
    sheetValue,
    savedSpendList,
    status
  } = useHandlers()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Card>
        <select
          value={sheetValue.id}
          onChange={(event) => handleSelectSpedId(event.target.value)}
        >
          <option>Selecione um serviço</option>
          {sheetRows
            .filter(
              (row) =>
                !row.Servico.includes('Total') && !row.Servico.includes('Fix')
            )
            .map((row) => (
              <option key={row.id} value={row.id}>
                {row.Servico}
              </option>
            ))}
        </select>
        <select
          value={sheetValue.month}
          onChange={(event) => handleSelectMonth(event.target.value)}
        >
          <option>Selecione um mes</option>
          {sheetRows.length &&
            Object.keys(sheetRows[0])
              .filter((key) => key.length === 3)
              .map((row) => (
                <option key={row} value={row}>
                  {row}
                </option>
              ))}
        </select>
        <input
          placeholder="Digite um valor. Ex: 45,51"
          type="number"
          value={sheetValue.value}
          onChange={(event) => handleChangeSendValue(event.target.value)}
        />
        <br />
        <Button
          disabled={
            !sheetValue.id || sheetValue.value === '0' || status === 'loading'
          }
          onClick={() => handleSubmit(sheetValue)}
          style={{
            alignSelf: 'center'
          }}
        >
          {status === 'loading' ? 'Carregando...' : 'Salvar'}
        </Button>
      </Card>

      <SavedSpendList sheetRows={sheetRows} savedSpendList={savedSpendList} />
    </S.Wrapper>
  )
}

export default Main
