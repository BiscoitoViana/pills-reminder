import { RectButton } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { rgba } from "polished"

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 0px 24px;
  margin-bottom: 28px;
`

export const Content = styled(RectButton)`
  position: relative;
  width: 100%;
  height: 100px;
  padding-top: 33px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.l};
`

export const TextContainer = styled.View`
  padding-left: 24px;
  width: 100%;
  position: relative;
`

export const GradientBackground = styled.Image`
  width: 100%;
  height: 88px;
  position: absolute;
  bottom: 0;
  border-radius: ${({ theme }) => theme.radius.l};
  overflow: hidden;
`

export const SeryngeImage = styled.Image`
  position: absolute;
  right: -40px;
  bottom: -65px;
`

export const CloseButton = styled(RectButton)`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${({ theme }) => rgba(theme.palette.dark, 0.08)};
  /* opacity: 0.08; */
  position: absolute;
  right: 16px;
  top: -10px;
  justify-content: center;
  align-items: center;
`
