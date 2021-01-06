import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3};
  background-color: blue;
`;

const Text = styled.Text`
  color: red;
`;

const Section = styled.View``;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Header>
        <Swiper loop timeout={3} controlsEnabled={false} autoPlay={true}>
          {nowPlaying.map((each) => (
            <Section key={each.id}>
              <Text>{each.title}</Text>
            </Section>
          ))}
        </Swiper>
      </Header>
    )}
  </Container>
);
