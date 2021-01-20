import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { Poster } from "../Components/Poster";
import ScrollContainer from "../Components/ScrollContainer";
import { sliceText } from "../utils";
import styled from "styled-components/native";
import { getImage } from "../api";
import Votes from "../Components/Votes";

const HEIGHT = Dimensions.get("window").height;

const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 300px;
  opacity: 0.4;
`;

const Info = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 180px;
`;
const OverView = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 5px;
`;

const InfoData = styled.View`
  width: 55%;
  margin-left: 20px;
`;

export default ({
  route: {
    params: { id, title, votes, poster, overview, backgroundImage },
  },
}) => {
  const navigaiton = useNavigation();
  useEffect(() => navigaiton.setOptions({ title: sliceText(title, 20) }), []);
  return (
    <ScrollContainer loading={false}>
      <Header>
        <BG source={{ uri: getImage(backgroundImage) }}></BG>
        <Info>
          <Poster url={poster} />
          <InfoData>
            <Title>{sliceText(title, 20)}</Title>
            <Votes votes={votes}></Votes>
          </InfoData>
        </Info>
      </Header>
    </ScrollContainer>
  );
};
