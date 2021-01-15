import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Search from "../../Components/Search";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Text = styled.Text`
  color: white;
`;

export default () => (
  <Container>
    <ScrollView>
      <Search></Search>
      <Text>HIDFD</Text>
    </ScrollView>
  </Container>
);
