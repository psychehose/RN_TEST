import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity } from 'react-native'

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({navigation: { navigate }}) => (
    <TouchableOpacity onPress={()=>navigate("Two")}>
        <Text>One</Text>
    </TouchableOpacity>
);
const ScreenTwo = () => <TouchableOpacity><Text>Two</Text></TouchableOpacity>
const ScreenThree = () => <TouchableOpacity><Text>Three</Text></TouchableOpacity>

const Stack = () => (
<NativeStack.Navigator>
    <NativeStack.Screen name="One" component={ScreenOne} options={{title: "Hello"}}/>
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} />
</NativeStack.Navigator>
);

export default Stack;