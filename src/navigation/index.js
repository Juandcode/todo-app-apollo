import React from 'react';
import MyDrawer from "./drawer-navigator";
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../scenes/login";
import Splash from "../scenes/Splash";
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import HomeScreen from "../scenes/Home";
import Main from "./Main";
import {navigationRef} from './RootNavigation';
import TodosUserGroup from "../scenes/TodosUserGroup";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={'Loading'}
                             screenOptions={{
                                 headerShown: false,
                                 //gestureEnabled: false,
                                 gestureDirection: 'horizontal',
                                 cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                             }}
            >
                <Stack.Screen name={'Home1'} component={Main}
                              options={{
                                  gestureDirection: 'horizontal',
                                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                  headerStyle: {
                                      backgroundColor: '#6D28D9',
                                  },

                              }}
                />
                <Stack.Screen name={'Login'} component={LoginScreen}
                              options={{
                                  gestureDirection: 'horizontal',
                                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                              }}
                />
                <Stack.Screen name={'Loading'} component={Splash}
                              options={{
                                  gestureDirection: 'horizontal',
                                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                              }}
                />
                <Stack.Screen name={'TodosUserGroup'} component={TodosUserGroup}
                              options={{
                                  title: 'Todos Users Group',
                                  headerStyle: {
                                      backgroundColor: "#6D28D9",
                                      //color: 'white',
                                  },
                                  headerTintColor: "#fff",
                                  headerShown: true,
                                  gestureDirection: 'horizontal',
                                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default AppNavigator;
