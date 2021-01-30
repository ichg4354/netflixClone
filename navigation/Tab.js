import React, { useEffect, useState, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../screens/Detail";
import Favs from "../screens/Discovery";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Movies from "../screens/Movies";
import Tvs from "../screens/Tvs";
import Search from "../screens/Search";
import MovieContainer from "../screens/Movies/MovieContainer";

const Tab = createBottomTabNavigator();

export default (object) => {
  //set each tab screens with designated header
  const route = getFocusedRouteNameFromRoute(object.route) ?? "Movies";
  useLayoutEffect(() => object.navigation.setOptions({ title: route }), [
    route,
  ]);

  //set each tabs with designated icon
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName =
            Platform.OS === "ios" ? (iconName = "ios-") : (iconName = "md-");
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              size={25}
              color={focused ? "white" : "gray"}
            ></Ionicons>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tvs} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>
  );
};
