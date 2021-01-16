import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Search from "../../Components/Search";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Text = styled.Text`
  color: white;
`;

export default ({ setKeyword }, results) => (
  <Container>
    <ScrollView>
      <Search onSubmit={setKeyword}></Search>
    </ScrollView>
  </Container>
);
