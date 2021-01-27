import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

const Link = (name, text, onPress) => (
  <TouchableOpacity>
    <Text>{text}</Text>
    <FontAwesome name={name} onPress={onPress}></FontAwesome>
  </TouchableOpacity>
);

export default Link;
