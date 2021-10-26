import styled, { css } from "styled-components/native"

interface Props {
  color?: string
}

export const Title1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-size: 34px;
  line-height: 38px;
  letter-spacing: -0.37px;
  color: ${({ theme }) => theme.palette.dark};
`

export const Title2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.palette.dark};
`

export const Title3 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.dark};
`

export const Body2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Semibold};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.palette.dark};
`

export const Body = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Regular};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.palette.gray};
`
