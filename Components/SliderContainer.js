import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;

export default ({ children }) => (
  <SliderContainer>
    <Swiper loop timeout={3} controlsEnabled={false} autoPlay={true}>
      {children}
    </Swiper>
  </SliderContainer>
);

SliderContainer.propTypes = {
  children: propTypes.node.isRequired,
};
