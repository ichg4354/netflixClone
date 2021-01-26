import React from "react";
import styled from "styled-components/native";
import { Poster } from "./Poster";
import { Text } from "react-native";
import { getImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { sliceText } from "../utils";
import { useNavigation } from "@react-navigation/native";
import propTypes from "prop-types";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const Title = styled.Text`
  font-size: 13px;
  margin-top: 4px;
`;

const Horizontal = ({ title, votes, poster, id, backgroundImage, isTv }) => {
  const navigation = useNavigation();
  const toDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      votes,
      poster,
      backgroundImage,
      isTv,
    });
  };
  return (
    <TouchableOpacity onPress={toDetail}>
      <Container>
        <Poster url={poster} />
        <Title style={{ color: "white" }}>{sliceText(title, 10)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number,
  poster: propTypes.string,
  backgroundImage: propTypes.string,
  isTv: propTypes.bool.isRequired,
};

export default Horizontal;
