import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getImage } from "../api";
import { Poster } from "./Poster";

const Container = styled.View``;

const Data = styled.View``;

const Title = styled.Text`
  color: white;
`;
const OverView = styled.Text`
  color: white;
`;
const ReleseDate = styled.Text`
  color: white;
`;

const Vertical = ({ title, poster, overView, releaseDate, id }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{title}</Title>
        <OverView>{overView}</OverView>
        {releaseDate ? <ReleseDate>{releaseDate}</ReleseDate> : null}
      </Data>
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  overView: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  ReleseDate: propTypes.string,
};

export default Vertical;
