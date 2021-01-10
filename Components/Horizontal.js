import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Poster } from "./Poster";
import { Text } from "react-native";
import { getImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const Title = styled.Text`
  font-size: 13px;
  margin-top: 4px;
`;

const Horizontal = ({ title, votes, poster }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={getImage(poster)} />
      <Title style={{ color: "white" }}>
        {title.length >= 10 ? title.slice(0, 10) + "..." : title}
      </Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

export default Horizontal;
