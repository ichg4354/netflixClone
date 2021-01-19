import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { getImage } from "../api";
import { Poster } from "./Poster";
import { sliceText } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 65%;
  margin-left: 2%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`;
const OverView = styled.Text`
  color: white;
`;
const ReleseDate = styled.Text`
  color: white;
  margin-bottom: 10px;
`;

const Vertical = ({ title, poster, overView, releaseDate, id }) => {
  const navigation = useNavigation();
  const toDetail = () => {
    navigation.navigate("Detail", { title, poster, overView, releaseDate, id });
  };
  return (
    <TouchableOpacity onPress={toDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{title}</Title>
          {releaseDate ? <ReleseDate>{releaseDate}</ReleseDate> : null}
          <OverView>{sliceText(overView, 150)}</OverView>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  overView: propTypes.string.isRequired,
  poster: propTypes.string,
  ReleseDate: propTypes.string,
};

export default Vertical;
