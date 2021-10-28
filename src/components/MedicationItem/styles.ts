import { RectButton } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`

const Content = styled.View`
  width: 100%;
  padding: 24px;
  border-color: ${({ theme }) => theme.palette.gray3};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.radius.l};
  position: relative;
  background-color: ${({ theme }) => theme.palette.white};
`

export const PanButton = styled(RectButton)`
  width: 72px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.palette.gray3};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.radius.l};
  position: absolute;
  left: 0;
  /* top: 8px; */
`

export const InfoContainer = styled.View`
  flex-direction: row;
`

export const TextContainer = styled.View`
  flex: 1;
`

export const Icon = styled.Image`
  width: 52px;
  height: 52px;
  margin-right: 12px;
`

export const AnimatedContent = Animated.createAnimatedComponent(Content)
