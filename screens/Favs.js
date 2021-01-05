import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [movie, setMovie] = useState({});
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setMovie({ discover, discoverError });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{movie.discover?.length}</Text>
    </View>
  );
};
