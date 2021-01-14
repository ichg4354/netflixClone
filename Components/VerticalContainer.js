import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";

const VerticalContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export default ({ title, children }) => (
  <VerticalContainer>
    <Title>{title}</Title>
    {children}
  </VerticalContainer>
);

VerticalContainer.propTypes = {
  title: propTypes.string,
  children: propTypes.node.isRequired,
};
