import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/ScrollContainer";
import { Text } from "react-native";

export default ({ loading }) => (
  <ScrollContainer loading={loading}>
    <Text style={{ color: "white" }}>HI</Text>
  </ScrollContainer>
);
