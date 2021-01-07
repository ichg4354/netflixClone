import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";
import { Slide } from "../../Components/Movies/Slide";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <>
        <Swiper loop timeout={3} controlsEnabled={false} autoPlay={true}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
