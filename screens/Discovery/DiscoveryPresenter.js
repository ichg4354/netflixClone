import React, { useEffect } from "react";
import { Dimensions, PanResponder, Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { getImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DiscoveryPoster = styled.Image`
  width: 90%;
  height: ${HEIGHT / 1.5}px;
  border-radius: 30px;
`;

const DiscoveryPresenter = ({ discover }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (ext, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });
  const animatedStyle = position.getTranslateTransform();
  const rotationValue = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {discover?.map((each, key) => (
        <Animated.View
          key={key}
          {...panResponder.panHandlers}
          style={{
            ...styles,
            transform: [...animatedStyle, { rotate: rotationValue }],
          }}
        >
          <DiscoveryPoster
            source={{ uri: getImage(each.poster_path) }}
          ></DiscoveryPoster>
        </Animated.View>
      ))}
    </Container>
  );
};

export default DiscoveryPresenter;

const styles = {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
};
