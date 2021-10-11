import React, {useEffect, useState} from 'react';
import {RectButton, BaseButton, ScrollView} from "react-native-gesture-handler";
import {SafeAreaView, Text, TouchableHighlight, View, StyleSheet, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useFonts} from 'expo-font';
import {gql, useQuery, useMutation, ApolloProvider} from '@apollo/client';
//import {useQuery} from '@apollo/react-hooks';
import jwtDecode from "jwt-decode";
import FormLogin from "../../components/organisms/FormLogin";
import * as SecureStore from 'expo-secure-store';
import {CommonActions} from '@react-navigation/native';
import makeApolloClient from "../../apollo";
import Splash from "../Splash";


const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [client, setClient] = useState(makeApolloClient(null));

    useEffect(() => {
        // const c = makeApolloClient(null);
        //setClient(makeApolloClient(null));
        console.log('mounted login');
        return () => {
        }
    }, []);
    /*let [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    });
    if (!fontsLoaded) return null;*/
    return (
        <ApolloProvider client={client}>
            <SafeAreaView
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'NunitoBold'
                }}>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FBBF24', '#EC4899', '#8B5CF6']}
                    style={[t.absolute, t.inset0]}/>
                <View style={[t.flex1]}/>
                <View style={[t.bgWhite, t.flex1, t.wFull, t.roundedTLg, {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                }]}>
                    <FormLogin
                        navigation={navigation}/>
                </View>
            </SafeAreaView>
        </ApolloProvider>
    );
}

export default LoginScreen;
