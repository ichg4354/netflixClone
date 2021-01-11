import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";
import { Slide } from "../../Components/Movies/Slide";
import { ScrollView } from "react-native";
import Horizontal from "../../Components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
  padding: 10px 20px;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export default ({ loading, nowPlaying, popular }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: 1,
      alignItems: "center",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <>
        <SliderContainer>
          <Swiper loop timeout={3} controlsEnabled={false} autoPlay={true}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <Title>Popular Movies</Title>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popular.map((movie) => (
              <Horizontal
                id={movie.id}
                key={movie.id}
                title={movie.title}
                votes={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </ScrollView>
        </Container>
      </>
    )}
  </ScrollView>
);
