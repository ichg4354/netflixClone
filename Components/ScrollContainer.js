import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import propTypes from "prop-types";
import { RefreshControl } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    refreshControl={<RefreshControl colors={"white"} tintColor={"white"} />}
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
