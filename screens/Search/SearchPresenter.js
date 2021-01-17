import React from "react";
import { TextBase } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Search from "../../Components/Search";
import Vertical from "../../Components/Vertical";
import VerticalContainer from "../../Components/VerticalContainer";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Text = styled.Text`
  color: white;
`;

export default ({ onSubmit, onChange, value, tvResult, movieResult }) => (
  <Container>
    <ScrollView>
      <Search
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={"Write a keyword"}
      ></Search>
      {tvResult ? (
        <VerticalContainer title="Tv">
          {tvResult.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              title={show.name}
              poster={show.poster_path}
              overView={show.overview}
            ></Vertical>
          ))}
        </VerticalContainer>
      ) : null}
      {movieResult ? (
        <VerticalContainer title="Movie">
          {movieResult.map((movie) => (
            <Vertical
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
              title={movie.title}
              overView={movie.overview}
            ></Vertical>
          ))}
        </VerticalContainer>
      ) : null}
    </ScrollView>
  </Container>
);
