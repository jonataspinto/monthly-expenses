import styled from 'styled-components'

export const SavedSpendListWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`
export const SavedSpendList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 0.75rem;
  margin-top: 0.75rem;
  height: 320px;
  overflow-y: auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const SavedSpendListContent = styled.div`
  display: flex;
  gap: 3px;
  height: max-content;
  flex-direction: column;
  padding: 0.5rem;
  border: solid 1px #999;
`
export const SavedSpendListTitleWrapper = styled.span`
  display: flex;
  gap: 5px;
  width: max-content;
  font-size: 1.25rem;
  font-weight: 700;
`
export const SavedSpendListTitle = styled.h3`
  width: max-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: #fcfcfc;
`

export const SavedSpendListValue = styled.p`
  width: max-content;
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
`
