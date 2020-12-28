import React, { useState } from "react"
import { Text, Image } from "react-native"
import AppLoading from "expo-app-loading"
import { Asset } from "expo-asset"
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font"
import { loadAsync } from "expo-font";

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
    const images = casheImages(['https://unsplash.com/photos/1gLdTsX3_70'])
    const fonts = casheFonts([Ionicons.font])
    return Promise.all([...images, ...fonts])
  }
  const onFinish = () => setIsLoading(true)
  return isLoading ? <Text>LOADED!!</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
}