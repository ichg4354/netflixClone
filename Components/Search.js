import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { TextInput } from "react-native";

const Search = ({ onChange, onSubmit }) => {
  return (
    <TextInput
      style={{
        color: "white",
        height: 40,
        borderColor: "white",
        borderWidth: 1,
      }}
      onChangeText={(text) => console.log(text)}
      onSubmitEditing={(value) => onSubmit(value.nativeEvent.text)}
    />
  );
};

export default Search;

// https://api.themoviedb.org/3/movie/upcoming?api_key=a76626c370c4d199ae9ac6169f7383dd