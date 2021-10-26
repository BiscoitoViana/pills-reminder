import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"

import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"

import { ThemeProvider } from "styled-components/native"
import theme from "./src/theme/theme"
import { Router } from "./src/routes/Router"

export default function App() {
  let [fontsLoaded] = useFonts({
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf")
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
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
