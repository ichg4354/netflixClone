import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Image } from "react-native";
import { getImage } from "../api";

const PosterImage = styled.Image`
  width: 105px;
  height: 160px;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Poster = ({ url }) => (
  <PosterImage source={{ uri: getImage(url) }}></PosterImage>
);

Poster.propTypes = {
  url: propTypes.string,
};

// source={
//   url
//     ? { url: getImage(url) }
//     : {
//         url:
//           "https://vectorified.com/images/picture-not-available-icon-1.png",
//       }
// }
