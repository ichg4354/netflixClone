import React from "react";
import { TextBase } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Search from "../../Components/Search";
import Horizontal from "../../Components/Horizontal";
import HorizontalContainer from "../../Components/HorizontalContainer";
import propTypes from "prop-types";
import ScrollContainer from "../../Components/ScrollContainer";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

export default ({ onSubmit, onChange, value, tvResult, movieResult }) => (
  <Container>
    <ScrollContainer loading={false} reloadFn={onSubmit}>
      <Search
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={"Write a keyword"}
      ></Search>
      {movieResult ? (
        <HorizontalContainer title="Movie">
          {movieResult.map((movie) => (
            <Horizontal
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
              title={movie.title}
              overView={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
            ></Horizontal>
          ))}
        </HorizontalContainer>
      ) : null}
      {tvResult ? (
        <HorizontalContainer title="Tv">
          {tvResult.map((show) => (
            <Horizontal
              id={show.id}
              key={show.id}
              title={show.name}
              poster={show.poster_path}
              overView={show.overview}
              votes={show.vote_average}
              backgroundImage={show.backdrop_path}
            ></Horizontal>
          ))}
        </HorizontalContainer>
      ) : null}
    </ScrollContainer>
  </Container>
);
