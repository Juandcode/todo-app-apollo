import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import React, {useEffect, useState, useContext} from 'react';
import TodosTabNavigator from "./todo-navigator";
import {View} from "react-native-web";
import {Text} from "react-native-paper";
import {CommonActions, useRoute, useNavigation} from "@react-navigation/native";
import * as RootNavigation from './RootNavigation';
import * as SecureStore from 'expo-secure-store';

const Drawer = createDrawerNavigator();


const salir = ({navigation}) => {
    return async () => {
        await SecureStore.deleteItemAsync('session');
        await RootNavigation.navigate('Login');
        RootNavigation.dispatch(state => {
            // Remove the home route from the stack
            console.log(state.routes);
            const routes = state.routes.filter(r => r.name === 'Login');
            console.log(routes);
            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });
    }
};

function exitButton(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                labelStyle={{fontFamily: "NunitoBold"}}
                label="Salir"
                onPress={salir(props)}
            />
        </DrawerContentScrollView>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{

                drawerStyle: {
                    //backgroundColor: 'black',
                },
                // title: "Home",
                headerStyle: {
                    backgroundColor: "#6D28D9",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontFamily: "NunitoBold",
                },
                drawerLabelStyle: {
                    fontFamily: "NunitoBold",
                }
            }}
            initialRouteName="Todos"
            drawerContent={(props) => exitButton(props)}
        >
            <Drawer.Screen name="Todos" component={TodosTabNavigator}/>
        </Drawer.Navigator>
    );
}

export default MyDrawer;
