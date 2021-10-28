import React from "react"
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler"
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"
import { Typography } from "../Typography"
import {
  AnimatedContent,
  Container,
  Icon,
  InfoContainer,
  PanButton,
  TextContainer
} from "./styles"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "styled-components"

export interface MedicationProps {
  id: string
  icon: "tablet" | "pill" | "ampoule" | "pump"
  name: string
  dosage: string
  when: "nevermind" | "before-meals" | "after-meals" | "with-food"
  schedule?: ScheduleInterface[]
  onDismiss: () => void
}

interface ScheduleInterface {
  index: number
  time: string
}

export const MedicationItem: React.FC<MedicationProps> = ({
  id,
  icon,
  name,
  dosage,
  when,
  onDismiss
}) => {
  const theme = useTheme()
  const ICON =
    icon === "pill"
      ? require(`../../../assets/icons/pill.png`)
      : icon === "ampoule"
      ? require(`../../../assets/icons/ampoule.png`)
      : icon === "pump"
      ? require(`../../../assets/icons/pump.png`)
      : require(`../../../assets/icons/tablet.png`)

  const translateX = useSharedValue(0)
  const TRANSLATE_X_THRESHOLD = 84

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX
    },
    onEnd: event => {
      if (event.translationX > TRANSLATE_X_THRESHOLD) {
        translateX.value = withTiming(TRANSLATE_X_THRESHOLD)
      } else {
        translateX.value = withTiming(0)
      }
    }
  })

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }))

  return (
    <Container>
      <PanButton onPress={onDismiss}>
        <Feather name="check" size={24} color={theme.palette.dark} />
      </PanButton>
      <PanGestureHandler onGestureEvent={panGesture}>
        <AnimatedContent style={reanimatedStyle}>
          <InfoContainer>
            <Icon source={ICON} />
            <TextContainer>
              <Typography variant="title3">{name}</Typography>
              <Typography variant="body1">
                {dosage} {when !== "nevermind" ? when : null}
              </Typography>
            </TextContainer>
          </InfoContainer>
        </AnimatedContent>
      </PanGestureHandler>
    </Container>
  )
}
