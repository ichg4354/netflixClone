import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  color: white;
  font-size: 13px;
  margin-bottom: 3px;
`;

const Votes = ({ votes }) => <Text>⭐️ {votes} / 10</Text>;

export default Votes;
