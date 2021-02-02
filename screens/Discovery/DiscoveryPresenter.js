import React, { useEffect, useState } from "react";
import {
  Dimensions,
  PanResponder,
  Animated,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { getImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
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

const DiscoveryPresenter = ({ discover, loading }) => {
  const [TopIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const nextCard = () => setTopIndex(TopIndex + 1);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (ext, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: async (ext, { dx, dy }) => {
      if (dx >= 150) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 300,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else if (dx <= -150) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 300,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });
  const animatedStyle = position.getTranslateTransform();
  const rotationValue = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const secondOpacityValue = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });
  const secondScaleValue = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={"white"}></ActivityIndicator>
      ) : (
        <>
          {discover?.map((each, key) => {
            if (key < TopIndex) {
              return null;
            }
            if (key === TopIndex) {
              return (
                <Animated.View
                  key={key}
                  {...panResponder.panHandlers}
                  style={{
                    ...styles,
                    zIndex: 1,
                    transform: [...animatedStyle, { rotate: rotationValue }],
                  }}
                >
                  <DiscoveryPoster
                    source={{ uri: getImage(each.poster_path) }}
                  ></DiscoveryPoster>
                </Animated.View>
              );
            } else if (key === TopIndex + 1) {
              return (
                <Animated.View
                  key={key}
                  {...panResponder.panHandlers}
                  style={{
                    ...styles,
                    zIndex: 0,
                    opacity: secondOpacityValue,
                    transform: [{ scale: secondScaleValue }],
                  }}
                >
                  <DiscoveryPoster
                    source={{ uri: getImage(each.poster_path) }}
                  ></DiscoveryPoster>
                </Animated.View>
              );
            } else {
              return (
                <Animated.View
                  key={key}
                  {...panResponder.panHandlers}
                  style={{
                    zIndex: -1,
                    ...styles,
                    opacity: 0,
                  }}
                >
                  <DiscoveryPoster
                    source={{ uri: getImage(each.poster_path) }}
                  ></DiscoveryPoster>
                </Animated.View>
              );
            }
          })}
        </>
      )}
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
