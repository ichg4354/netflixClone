import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";
import Detail from "./Detail";

export default () => {
  const [movies, setMovies] = useState({});
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcomming, upcommingError] = await movieApi.upcomming();
    setMovies({
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcomming,
      upcommingError,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>{movies.nowPlaying?.length}</Text>
    </View>
  );
};
