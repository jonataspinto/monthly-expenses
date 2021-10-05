import { SheetRow, SheetSpendValue } from 'interfaces'
import * as S from './styles'

type Props = {
  savedSpendList: Array<SheetSpendValue>
  sheetRows: Array<SheetRow>
}

export const SavedSpendList = ({ savedSpendList, sheetRows }: Props) => (
  <S.SavedSpendListWrapper>
    <h2>Ultimos Lançamentos</h2>
    <S.SavedSpendList>
      {savedSpendList.length > 0 &&
        savedSpendList.map((savedSpend) => {
          const sheetRow = sheetRows.find((row) => row.id === savedSpend.id)
          const key = Math.random()

          return (
            <S.SavedSpendListContent key={`${key}-${savedSpend.id}`}>
              <S.SavedSpendListTitleWrapper>
                Serviço:
                <S.SavedSpendListTitle>
                  {sheetRow?.Servico}
                </S.SavedSpendListTitle>
              </S.SavedSpendListTitleWrapper>
              <S.SavedSpendListValue>
                R$ {savedSpend.value}
              </S.SavedSpendListValue>
            </S.SavedSpendListContent>
          )
        })}
    </S.SavedSpendList>
  </S.SavedSpendListWrapper>
)
