import AppNavigator from "./navigation";
import {ApolloProvider} from '@apollo/client';
import * as SecureStore from 'expo-secure-store';
import {useFonts} from 'expo-font';
import React, {useEffect, useState, useContext, createContext} from 'react';
import {View, Text} from 'react-native';
import Splash from "./scenes/Splash";
import makeApolloClient from "./apollo";
import jwtDecode from "jwt-decode";

//export const context1 = createContext();
import {Context2} from './Context1';

const Principal = () => {
    return (
        <AppNavigator/>
    )
}
export default Principal;
