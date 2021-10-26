import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"

import { ThemeProvider } from "styled-components/native"
import theme from "./src/theme/theme"
import { Router } from "./src/routes/Router"

export default function App() {
  let [fontsLoaded] = useFonts({
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-BoldItalic": require("./assets/fonts/SF-Pro-Text-BoldItalic.otf")
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
