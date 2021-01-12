import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import propTypes from "prop-types";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : "auto",
      alignItems: "center",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
};

export default ScrollContainer;
