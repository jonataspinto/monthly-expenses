import { ReactNode } from 'react'
import * as S from './styles'

type PropsCard = {
  children: ReactNode
}

export const Card = ({ children, ...restProps }: PropsCard) => (
  <S.Wrapper {...restProps}>{children}</S.Wrapper>
)
