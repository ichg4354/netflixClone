import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const Text = styled.Text`
  color: white;
  margin-right: 5px;
`;

const InAppLink = ({ icon, text, onPress }) => (
  <Box>
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text>{text}</Text>
      <FontAwesome
        name={icon}
        onPress={onPress}
        size={20}
        color="white"
      ></FontAwesome>
    </TouchableOpacity>
  </Box>
);

export default InAppLink;
