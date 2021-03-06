import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { getImage } from "../api";
import { Poster } from "./Poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import Votes from "./Votes";
import { sliceText } from "../utils";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Data = styled.View`
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 10px;
`;

const VotesContainer = styled.View`
  opacity: 0.8;
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.6;
  font-weight: 600;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #c0392b;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  margin-top: 15px;
  border-radius: 4px;
  width: 60%;
`;

const ButtonText = styled.Text`
  color: white;
`;

export const Slide = ({
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
  isTv,
}) => {
  const navigation = useNavigation();
  const toDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      backgroundImage,
      votes,
      overview,
      poster,
      isTv,
    });
  };
  return (
    <>
      <BG source={{ uri: getImage(backgroundImage) }}></BG>
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{sliceText(title, 25)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{sliceText(overview, 80)}</Overview>
          <Button onPress={toDetail}>
            <ButtonText>View details</ButtonText>
          </Button>
        </Data>
      </Content>
    </>
  );
};

Slide.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string,
  votes: propTypes.number,
  overview: propTypes.string,
  poster: propTypes.string,
  isTv: propTypes.bool.isRequired,
};
