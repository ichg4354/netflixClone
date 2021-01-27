import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

const InAppLink = ({ icon, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color: "white" }}>{text}</Text>
    <FontAwesome
      name={icon}
      onPress={onPress}
      size={18}
      color="white"
    ></FontAwesome>
  </TouchableOpacity>
);

export default InAppLink;
