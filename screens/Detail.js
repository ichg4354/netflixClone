import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { sliceText } from "../utils";

export default ({
  route: {
    params: { id, title, votes, poster },
  },
}) => {
  const navigaiton = useNavigation();
  // navigaiton.setOptions({ title: sliceText(title, 20) });
  useEffect(() => navigaiton.setOptions({ title: sliceText(title, 20) }), []);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
