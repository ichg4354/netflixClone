import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from "../screens/Detail";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";


const Tab = createBottomTabNavigator()

export default (object) => {
    object.navigation.setOptions({ title: "Movies" })
    if (object.route.state) {
        const routeNames = object.route.state.routeNames
        const routeIndex = object.route.state.index
        object.navigation.setOptions({ title: routeNames[routeIndex] })
    }
    return (<Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="TV" component={Tv} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>)
}