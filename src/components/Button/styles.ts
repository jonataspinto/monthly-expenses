import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  max-width: 320px;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #fcfcfc;
  font-size: 1.75rem;

  &:hover {
    background-color: #dddddd;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #dddddd;
  }
`
