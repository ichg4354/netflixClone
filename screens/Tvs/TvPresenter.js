import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/ScrollContainer";
import { Text } from "react-native";
import HorizontalContainer from "../../Components/HorizontalContainer";
import Horizontal from "../../Components/Horizontal";
import VerticalContainer from "../../Components/VerticalContainer";
import Vertical from "../../Components/Vertical";

export default ({ loading, popular, topRated, today }) => (
  <ScrollContainer loading={loading}>
    <HorizontalContainer title={"Popular Shows"}>
      {popular?.map((show) => (
        <Horizontal
          id={show.id}
          key={show.id}
          title={show.name}
          votes={show.vote_average}
          poster={show.poster_path}
        ></Horizontal>
      ))}
    </HorizontalContainer>
    <HorizontalContainer title={"Top Rated"}>
      {topRated?.map((show) => (
        <Horizontal
          id={show.id}
          key={show.id}
          title={show.name}
          votes={show.vote_average}
          poster={show.poster_path}
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
          overView={show.overview}
        ></Vertical>
      ))}
    </VerticalContainer>
  </ScrollContainer>
);
