import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

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
      <TextInput
        style={{
          color: "white",
          height: 40,
          borderColor: "white",
          borderWidth: 1,
        }}
        onChangeText={(text) => console.log(text)}
        onSubmitEditing={(value) => console.log(value.nativeEvent.text)}
      />
    </ScrollView>
  </Container>
);
