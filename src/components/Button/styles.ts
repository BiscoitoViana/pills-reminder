import styled, { css } from "styled-components/native"
import { RectButton } from "react-native-gesture-handler"

interface Props {
  disabled?: boolean
}

export const Container = styled(RectButton)`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.blue};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.m};
`

export const DisabledContainer = styled.View`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.gray5};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.m};
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Semibold};
  font-size: 16px;
  color: ${({ theme }) => theme.palette.white};

  ${({ disabled }: Props) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.palette.gray2};
    `}
`
