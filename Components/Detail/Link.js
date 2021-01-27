import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  margin-right: 5px;
`;

const InAppLink = ({ icon, text, onPress }) => (
  <Button onPress={onPress}>
    <Text>{text}</Text>
    <FontAwesome
      name={icon}
      onPress={onPress}
      size={20}
      color="white"
    ></FontAwesome>
  </Button>
);

export default InAppLink;
