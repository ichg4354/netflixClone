import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

const DiscoveryPresenter = ({ discover }) => (
  <View>
    <Text>{discover?.length}</Text>
  </View>
);

export default DiscoveryPresenter;
