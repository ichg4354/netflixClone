import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default ({
  route: {
    params: { id, title, votes, poster },
  },
}) => {
  const navigaiton = useNavigation();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
