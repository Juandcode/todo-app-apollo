import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../scenes/Home";
import GroupTodoScreen from "../scenes/GroupTodo";
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {t} from "react-native-tailwindcss";

const Tab = createMaterialBottomTabNavigator();

function TodosTabNavigator() {
    return (
        <Tab.Navigator initialRouteName={'Home'}
                       shifting={true}
                       screenOptions={{
                           headerShown: false,
                           tabBarLabelStyle: {
                               fontSize: 13,
                               fontFamily: 'NunitoBold',
                           },
                           tabBarStyle: {
                               backgroundColor: '#4338CA',
                           },
                           tabBarActiveTintColor: 'white'
                       }}
                       barStyle={{backgroundColor: '#6D28D9',}}>
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                            tabBarLabel: <Text style={{fontFamily: 'NunitoBold', fontSize: 13}}>My Todo</Text>,
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="home" color={color} size={25}/>
                            ),
                        }}
            />
            <Tab.Screen name="Home2" component={GroupTodoScreen}
                        options={{
                            tabBarLabel: <Text style={{fontFamily: 'NunitoBold', fontSize: 13}}>Group</Text>,
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="account-group" color={color} size={25}/>
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}

export default TodosTabNavigator;
