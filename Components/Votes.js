import React from "react";
import styled from "styled-components/native";

const Box = styled.Text`
  color: white;
  font-size: 13px;
  margin-bottom: 3px;
`;

const Votes = ({ votes }) => <Box>⭐️ {votes ? votes : 0} / 10</Box>;

export default Votes;
