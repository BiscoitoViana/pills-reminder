import React from "react"
import { Container, DisabledContainer, Label } from "./styles"

interface ButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false
}) => {
  if (disabled) {
    return (
      <DisabledContainer>
        <Label disabled>{label}</Label>
      </DisabledContainer>
    )
  }

  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  )
}
