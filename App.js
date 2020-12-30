import React, { useState } from "react"
import { Text, Image } from "react-native"
import AppLoading from "expo-app-loading"
import { Asset } from "expo-asset"
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font"
import { loadAsync } from "expo-font";
import { NavigationContainer } from "@react-navigation/native"
import Stack from "./navigation/Stack";
import Tab from "./navigation/Tab";

const casheImages = images => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync()
  }
})

const casheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const loadAssets = () => {
    const images = casheImages(['https://images.unsplash.com/photo-1609252703786-3d1a11c5cee7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'])
    const fonts = casheFonts([Ionicons.font])
    return Promise.all([...images, ...fonts])
  }
  const onFinish = () => setIsLoading(true)
  return isLoading ? <NavigationContainer><Stack /></NavigationContainer> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
}