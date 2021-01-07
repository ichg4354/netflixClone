import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { getImage } from "../../api";
import { View, Image } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Slide = ({ id, title, backgroundImage, votes, overview }) => (
  <Container>
    <BG source={{ uri: getImage(backgroundImage) }}></BG>
  </Container>
);

Slide.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
};
