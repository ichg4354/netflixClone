import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { getImage } from "../../api";
import { Poster } from "../Poster";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: white;
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 5px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.6;
  font-weight: 600;
`;

export const Slide = ({
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
}) => (
  <>
    <BG source={{ uri: getImage(backgroundImage) }}></BG>
    <Content>
      <Poster url={getImage(poster)} />
      <Data>
        <Title>{title.slice(0, 30)}</Title>
        <Votes>{`${votes} / 10`}</Votes>
        <Overview>{overview.slice(0, 150) + "..."}</Overview>
      </Data>
    </Content>
  </>
);

Slide.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};
