import React from "react";
import styled from "styled-components/native";
import { Slide } from "../../Components/Slide";
import Horizontal from "../../Components/Horizontal";
import Vertical from "../../Components/Vertical";
import ScrollContainer from "../../Components/ScrollContainer";
import HorizontalContainer from "../../Components/HorizontalContainer";
import VerticalContainer from "../../Components/VerticalContainer";
import SliderContainer from "../../Components/SliderContainer";

export default ({ loading, nowPlaying, popular, upcomming, reloadFn }) => (
  <ScrollContainer loading={loading} reloadFn={reloadFn}>
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
          isTv={false}
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
          backgroundImage={movie.backdrop_path}
          isTv={false}
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
          overview={movie.overview}
          releaseDate={movie.release_date}
          backgroundImage={movie.backdrop_path}
          isTv={false}
        ></Vertical>
      ))}
    </VerticalContainer>
  </ScrollContainer>
);
