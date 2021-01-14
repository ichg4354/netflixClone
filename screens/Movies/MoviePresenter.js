import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, Text } from "react-native";
import { Slide } from "../../Components/Slide";
import { ScrollView } from "react-native";
import Horizontal from "../../Components/Horizontal";
import Vertical from "../../Components/Vertical";
import ScrollContainer from "../../Components/ScrollContainer";
import HorizontalContainer from "../../Components/HorizontalContainer";
import VerticalContainer from "../../Components/VerticalContainer";
import SliderContainer from "../../Components/SliderContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ loading, nowPlaying, popular, upcomming }) => (
  <ScrollContainer loading={loading}>
    <SliderContainer>
      {nowPlaying?.map((movie) => (
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
    </SliderContainer>
    <HorizontalContainer title={"Popular Movies"}>
      {popular?.map((movie) => (
        <Horizontal
          id={movie.id}
          key={movie.id}
          title={movie.title}
          votes={movie.vote_average}
          poster={movie.poster_path}
        />
      ))}
    </HorizontalContainer>
    <VerticalContainer title="Upcomming">
      {upcomming?.map((movie) => (
        <Vertical
          key={movie.id}
          poster={movie.poster_path}
          id={movie.id}
          title={movie.title}
          overView={movie.overview}
          releaseDate={movie.release_date}
        ></Vertical>
      ))}
    </VerticalContainer>
  </ScrollContainer>
);
