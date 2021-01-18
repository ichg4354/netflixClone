import React, { useState } from "react";
import { Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { loadAsync } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import { StatusBar } from "expo-status-bar";

const casheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const casheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const loadAssets = () => {
    const images = casheImages([
      "https://vectorified.com/images/picture-not-available-icon-1.png",
    ]);
    const fonts = casheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsLoading(true);
  return isLoading ? (
    <NavigationContainer>
      <Stack />
      <StatusBar style="light"></StatusBar>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
