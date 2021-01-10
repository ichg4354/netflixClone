import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Poster } from "./Poster";
import { Text } from "react-native";
import { getImage } from "../api";

const Container = styled.View``;

const Vertical = ({ title, votes, poster }) => (
  <Container>
    <Poster url={getImage(poster)} />
    <Text style={{ color: "white" }}>{title}</Text>
  </Container>
);

export default Vertical;
