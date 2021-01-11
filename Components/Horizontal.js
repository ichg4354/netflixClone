import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Poster } from "./Poster";
import { Text } from "react-native";
import { getImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { sliceText } from "../utils";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const Title = styled.Text`
  font-size: 13px;
  margin-top: 4px;
`;

const Horizontal = ({ title, votes, poster, id }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title style={{ color: "white" }}>{sliceText(title, 10)}</Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

export default Horizontal;
