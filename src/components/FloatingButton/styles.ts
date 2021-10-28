import { RectButton } from "react-native-gesture-handler"
import styled from "styled-components/native"

export const Button = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.blue};
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  bottom: 32px;
`
