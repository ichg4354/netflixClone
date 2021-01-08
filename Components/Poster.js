import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Image } from "react-native";

const PosterImage = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

export const Poster = ({ url }) => (
  <PosterImage source={{ uri: url }}></PosterImage>
);

Poster.propTypes = {
  url: propTypes.string.isRequired,
};
