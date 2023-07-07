import * as React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/home/HomeScreen'
import Recording from '../screens/recording/Recording'
import VideoPlay from '../screens/videoplayback/VideoPlayer'

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator name='Home'>
                <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{headerShown:false}}/>
                <Stack.Screen
                name='Recording'
                component={Recording}
                options={{headerShown:true}}/>
                <Stack.Screen
                name='VideoPlayback'
                component={VideoPlay}
                options={{headerShown:true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}