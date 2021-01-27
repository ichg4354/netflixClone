import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import React, { useEffect } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { Poster } from "../../Components/Poster";
import ScrollContainer from "../../Components/ScrollContainer";
import { sliceText } from "../../utils";
import { getImage } from "../../api";
import Votes from "../../Components/Votes";

const HEIGHT = Dimensions.get("window").height;

const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const BG = styled.Image`
  width: 100%;
  height: 300px;
  opacity: 0.4;
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 170px;
  width: 85%;
`;

const OverView = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 5px;
`;

const InfoData = styled.View`
  width: 55%;
  margin-left: 15px;
`;

const Data = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
`;

const DataTitle = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
`;
const DataValue = styled.Text`
  color: white;
  font-weight: 400;
  margin-bottom: 20px;
`;

export default ({
  id,
  title,
  poster,
  overview,
  backgroundImage,
  votes,
  reloadFn,
  loading,
  runtime,
  status,
  first_air_date,
  genres,
  number_of_episodes,
}) => {
  const navigaiton = useNavigation();
  useEffect(() => navigaiton.setOptions({ title: sliceText(title, 20) }), []);
  return (
    <ScrollContainer loading={false} reloadFn={reloadFn}>
      <Header>
        <BG source={{ uri: getImage(backgroundImage) }}></BG>
        <Info>
          <Poster url={poster} />
          <InfoData>
            <Title>{sliceText(title, 20)}</Title>
            {votes && <Votes votes={votes}></Votes>}
          </InfoData>
        </Info>
      </Header>
      <Data>
        {overview ? (
          <>
            <DataTitle>Overview</DataTitle>
            <DataValue>{overview}</DataValue>
          </>
        ) : null}
        {loading ? (
          <ActivityIndicator color="white" style={{ marginTop: 50 }} />
        ) : (
          <>
            {status ? (
              <>
                <DataTitle>Status</DataTitle>
                <DataValue>{status}</DataValue>
              </>
            ) : null}
            {runtime ? (
              <>
                <DataTitle>Runtime</DataTitle>
                <DataValue>{runtime} minutes</DataValue>
              </>
            ) : null}
            {first_air_date ? (
              <>
                <DataTitle>First Air Date</DataTitle>
                <DataValue>{first_air_date}</DataValue>
              </>
            ) : null}
            {genres ? (
              <>
                <DataTitle>Geners</DataTitle>
                <DataValue>
                  {genres.map((each, index) =>
                    index + 1 === genres.length
                      ? ` ${each.name}`
                      : ` ${each.name},`
                  )}
                </DataValue>
              </>
            ) : null}
            {number_of_episodes ? (
              <>
                <DataTitle>Number of episodes</DataTitle>
                <DataValue>{number_of_episodes}</DataValue>
              </>
            ) : null}
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};
