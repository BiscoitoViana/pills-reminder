import React, { ReactNode } from "react"
import { Body, Body2, Title1, Title2, Title3 } from "./styles"

interface TypographyProps {
  children: ReactNode | string
  variant: "title1" | "title2" | "title3" | "body1" | "body2"
  color?: string
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body1"
}) => {
  if (variant === "title1") {
    return <Title1>{children}</Title1>
  }

  if (variant === "title2") {
    return <Title2>{children}</Title2>
  }

  if (variant === "title3") {
    return <Title3>{children}</Title3>
  }

  if (variant === "body2") {
    return <Body2>{children}</Body2>
  }

  return <Body>{children}</Body>
}
