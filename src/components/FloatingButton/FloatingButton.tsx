import React from "react"
import { useTheme } from "styled-components"
import { Entypo } from "@expo/vector-icons"

import { Button } from "./styles"

interface FloatingButtonProps {
  onPress: () => void
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress }) => {
  const theme = useTheme()
  return (
    <Button onPress={onPress}>
      <Entypo name="plus" size={24} color={theme.palette.white} />
    </Button>
  )
}
