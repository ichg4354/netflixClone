import React, { useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import propTypes from "prop-types";
import { RefreshControl } from "react-native";

const ScrollContainer = ({ loading, children, reloadFn }) => {
  const [reloading, setReloading] = useState(false);
  const reload = async () => {
    setReloading(true);
    await reloadFn();
    setReloading(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={"white"}
          tintColor={"white"}
          refreshing={reloading}
          onRefresh={reload}
        />
      }
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
};

ScrollContainer.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
  reloadFn: propTypes.func,
};

export default ScrollContainer;
