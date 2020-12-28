import React from 'react'
import { Text, View, Button } from "react-native"

export default ({ navigation }) => (
    <View>
        <Text>HOME</Text>
        <Button title="Go To Detail" onPress={() => navigation.navigate("Detail")}></Button>
    </View>
)