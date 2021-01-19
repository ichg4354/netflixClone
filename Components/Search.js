import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { NativeEventEmitter, TextInput } from "react-native";

const Search = ({ onChange, onSubmit, placeholder, value }) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={{
        color: "black",
        backgroundColor: "white",
        height: 40,
        borderColor: "white",
        borderRadius: 15,
        width: "90%",
        alignSelf: "center",
        paddingHorizontal: 10,
        marginTop: 10,
      }}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType={"search"}
    />
  );
};

export default Search;

// https://api.themoviedb.org/3/movie/upcoming?api_key=a76626c370c4d199ae9ac6169f7383dd
