import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../../api";
import MoviePresenter from "./MoviePresenter";

export default () => {
  const [movies, setMovies] = useState({ loading: true });
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
      loading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <MoviePresenter {...movies} />;
};
