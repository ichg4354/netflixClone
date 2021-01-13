import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

const HorizontalContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export default ({ title, children }) => (
  <HorizontalContainer>
    <Title>{title}</Title>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  </HorizontalContainer>
);
