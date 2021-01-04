import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";
import Detail from "./Detail";

export default () => {
  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    console.log(nowPlaying);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>MOVIES</Text>
    </View>
  );
};
