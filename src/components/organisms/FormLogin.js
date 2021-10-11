import React, {Fragment, useState} from 'react';
import {RectButton, BaseButton, ScrollView} from "react-native-gesture-handler";
import {Alert, View} from 'react-native';
import UserPasswordLogin from "../molecules/UserPasswordLogin";
import Button from "../atoms/Button";
import {t} from "react-native-tailwindcss";
import * as SecureStore from 'expo-secure-store';
import {gql, useMutation} from "@apollo/client";
import jwtDecode from "jwt-decode";
import {CommonActions} from "@react-navigation/native";
import {LOGIN} from "../../services";
import * as Facebook from 'expo-facebook';


const FormLogin = ({navigation}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginFunc] = useMutation(LOGIN, {
        variables: {
            loginEmail: username,
            loginPassword: password,
        },
        onCompleted: async ({login}) => {
            console.log(login);
            const decode = jwtDecode(login.token);
            console.log(decode);
            await SecureStore.setItemAsync('session', login.token);
            console.log('time: ' + decode.exp - Math.floor(Date.now() / 1000));
            await navigation.push('Home1', {token: login.token});
            navigation.dispatch(state => {
                // Remove the home route from the stack
                const routes = state.routes.filter(r => r.name !== ('Login' || 'Loading'));
                return CommonActions.reset({
                    ...state,
                    routes,
                    index: routes.length - 1,
                });
            });
        },
        onError: (error) => {
            console.log(error);
        }
    });

    async function logInFacebook() {
        try {
            await Facebook.initializeAsync({
                appId: '572755197094257',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${jwtDecode(token)}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <ScrollView style={[t.wFull]}
                    contentContainerStyle={[t.itemsCenter]}>
            <UserPasswordLogin style={[t.w10_12, t.mY4]} setText={setUsername} text={'Usuario'}/>
            <UserPasswordLogin style={[t.w10_12, t.mY4]} setText={setPassword} text={'Password'}/>
            <Button
                style={[t.w10_12, t.h12, t.bgIndigo800, t.roundedLg, t.shadowLg, t.flex, t.itemsCenter, t.justifyCenter, t.mY4]}
                onPress={loginFunc}
                name={'Login'}/>
            <Button onPress={logInFacebook} icon={'facebook-square'} name={'Facebook'}
                    style={[t.w10_12, t.h12, t.bgBlue700, t.roundedLg, t.shadowLg, t.flex, t.itemsCenter, t.justifyCenter, t.mY4]}/>
        </ScrollView>
    );
};
export default FormLogin;
