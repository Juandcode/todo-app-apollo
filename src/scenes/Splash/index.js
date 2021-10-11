import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import makeApolloClient from "../../apollo";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import * as Font from "expo-font";
import {CommonActions} from "@react-navigation/native";

const Splash = ({navigation}) => {

    async function loadFonts() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            'NunitoBold': require('../../assets/fonts/Nunito-Bold.ttf'),
            'NunitoLight': require('../../assets/fonts/Nunito-Light.ttf'),
        });
    }

    const loadContent = async () => {
        //let client = makeApolloClient(null);
        //await SecureStore.deleteItemAsync('session');
        await loadFonts();
        const sessionToken = await SecureStore.getItemAsync('session');
        if (sessionToken) {
            const sessionDecode = jwtDecode(sessionToken);
            console.log(sessionDecode.exp - Math.floor(Date.now() / 1000));
            if (sessionDecode) {
                if (Math.floor(Date.now() / 1000) < sessionDecode.exp) {
                    //setSession(sessionToken);
                    //client = makeApolloClient(sessionToken);
                    await navigation.push('Home1', {token: sessionToken});
                    navigation.dispatch(state => {
                        // Remove the home route from the stack
                        const routes = state.routes.filter(r => r.name !== 'Loading');
                        return CommonActions.reset({
                            ...state,
                            routes,
                            index: routes.length - 1,
                        });
                    });
                    return;
                }
            }
        }
        await navigation.navigate('Login');
        navigation.dispatch(state => {
            // Remove the home route from the stack
            const routes = state.routes.filter(r => r.name !== 'Loading');

            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });
        //setClient(client);
    };
    useEffect(() => {
        (async () => loadContent())();
    }, []);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#3730A3"/>
        </View>
    )
};
export default Splash;
