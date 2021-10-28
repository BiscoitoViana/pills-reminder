import React from "react"
import { Typography } from "../Typography"
import { Entypo } from "@expo/vector-icons"

import {
  CloseButton,
  Container,
  Content,
  GradientBackground,
  SeryngeImage,
  TextContainer
} from "./styles"
import { useTheme } from "styled-components"

interface BannerProps {
  onPress?: () => void
  onDismiss?: () => void
}

const SERYNGE_IMAGE = require("../../../assets/icons/serynge.png")
const BACKGROUND_GRADIENT = require("../../../assets/icons/gradient-background.png")

export const VaccineBanner: React.FC<BannerProps> = () => {
  const theme = useTheme()

  return (
    <Container>
      <Content>
        <GradientBackground source={BACKGROUND_GRADIENT} />
        <SeryngeImage source={SERYNGE_IMAGE} />
        <TextContainer>
          <Typography variant="banner-title">Get vaccinated</Typography>
          <Typography variant="banner-body">
            Nearest vaccination center
          </Typography>
          <CloseButton>
            <Entypo name="cross" size={14} color={theme.palette.white} />
          </CloseButton>
        </TextContainer>
      </Content>
    </Container>
  )
}
