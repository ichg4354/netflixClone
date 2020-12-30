import React, { useEffect, useState } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from "../screens/Detail";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default (object) => {
    const route = getFocusedRouteNameFromRoute(object.route) ?? "Movies"
    useEffect(() => object.navigation.setOptions({ title: route }), [route])

    return (<Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="TV" component={Tv} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>)
}