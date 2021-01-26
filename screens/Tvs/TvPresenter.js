import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/ScrollContainer";
import { Text } from "react-native";
import HorizontalContainer from "../../Components/HorizontalContainer";
import Horizontal from "../../Components/Horizontal";
import VerticalContainer from "../../Components/VerticalContainer";
import Vertical from "../../Components/Vertical";
import SliderContainer from "../../Components/SliderContainer";
import Swiper from "react-native-web-swiper";
import { tvApi } from "../../api";
import { Slide } from "../../Components/Slide";

export default ({ loading, popular, topRated, today, thisWeek, reloadFn }) => (
  <ScrollContainer loading={loading} reloadFn={reloadFn}>
    <HorizontalContainer title={"Popular Shows"}>
      {popular?.map((show) => (
        <Horizontal
          id={show.id}
          key={show.id}
          title={show.name}
          votes={show.vote_average}
          poster={show.poster_path}
          backgroundImage={show.backdrop_path}
          isTv={true}
        ></Horizontal>
      ))}
    </HorizontalContainer>
    <SliderContainer>
      {thisWeek?.map((show) => (
        <Slide
          id={show.id}
          key={show.id}
          title={show.name}
          overview={show.overview}
          votes={show.vote_average}
          backgroundImage={show.backdrop_path}
          poster={show.poster_path}
          isTv={true}
        ></Slide>
      ))}
    </SliderContainer>
    <HorizontalContainer title={"Top Rated"}>
      {topRated?.map((show) => (
        <Horizontal
          id={show.id}
          key={show.id}
          title={show.name}
          votes={show.vote_average}
          poster={show.poster_path}
          backgroundImage={show.backdrop_path}
          isTv={true}
        ></Horizontal>
      ))}
    </HorizontalContainer>
    <VerticalContainer title="On Air Today">
      {today?.map((show) => (
        <Vertical
          id={show.id}
          key={show.id}
          title={show.name}
          poster={show.poster_path}
          overview={show.overview}
          backgroundImage={show.backdrop_path}
          isTv={true}
        ></Vertical>
      ))}
    </VerticalContainer>
  </ScrollContainer>
);
