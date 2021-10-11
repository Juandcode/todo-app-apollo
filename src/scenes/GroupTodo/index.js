import React, {useEffect} from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import FormGroup from "../../components/organisms/FormGroup";

const GroupTodoScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <FormGroup/>
        </SafeAreaView>
    );
};

export default GroupTodoScreen;
