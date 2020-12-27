import React, { useState } from "react"
import { Text, Image } from "react-native"
import AppLoading from "expo-app-loading"
import { Asset } from "expo-asset"


const casheImages = images => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync()
  }
})

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const loadAssets = async () => {
    const images = casheImages(['https://unsplash.com/photos/1gLdTsX3_70'])
    console.log(images)
  }
  const onFinish = () => setIsLoading(true)
  return isLoading ? <Text>LOADED!!</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
}