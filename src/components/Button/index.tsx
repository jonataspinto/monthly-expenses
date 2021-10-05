import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => <S.Button {...props} />
