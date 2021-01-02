import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Tab from "./Tab";
import Detail from "../screens/Detail";

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "black",
            shadowColor: "black"
        },
        headerTintColor: 'white',
    }}>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Detail" component={Detail} options={{
            headerBackTitleVisible: false
        }} />
    </Stack.Navigator>
)




