import React from "react"
import { View, Text, Button } from "react-native"
import Detail from "./Detail"

export default ({ navigation }) => <View>
    <Text>MOVIES</Text>
    <Button title="Detail" component={Detail} onPress={() => navigation.navigate("Detail")}></Button>
</View> 