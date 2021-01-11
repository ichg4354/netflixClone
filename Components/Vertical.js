import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getImage } from "../api";

const Data = styled.View``;

const Title = styled.Title``;
const Poster = styled.Image``;
const OverView = styled.Text``;
const ReleseDate = styled.Text``;

const Vertical = ({ title, poster, overView, releaseDate }) => (
  <TouchableOpacity>
    <Poster uri={getImage(poster)} />
    <Data>
      <Title>{title}</Title>
      <OverView>{overView}</OverView>
      {releaseDate ? <ReleseDate>{releaseDate}</ReleseDate> : null}
    </Data>
  </TouchableOpacity>
);

Vertical.propTypes = {
  title: propTypes.string.isRequired,
  overView: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  ReleseDate: propTypes.string,
};

export default Vertical;
