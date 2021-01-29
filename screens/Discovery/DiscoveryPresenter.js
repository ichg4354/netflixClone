import React from "react";
import { Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { getImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DiscoveryPoster = styled.Image`
  width: 90%;
  height: ${HEIGHT / 1.5}px;
  position: absolute;
  border-radius: 30px;
`;

const DiscoveryPresenter = ({ discover }) => (
  <Container>
    <Card>
      {discover?.map((each, key) => (
        <DiscoveryPoster
          key={key}
          source={{ uri: getImage(each.poster_path) }}
        ></DiscoveryPoster>
      ))}
    </Card>
  </Container>
);

export default DiscoveryPresenter;
