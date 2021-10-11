import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import UserCard from "../molecules/UserCard";
import {t} from "react-native-tailwindcss";
import {Text} from "react-native-paper";
import {ScrollView} from "react-native-gesture-handler";
import {useMutation, useQuery, useSubscription, useApolloClient} from "@apollo/client";
import {LISTUSERS_GROUP, SUBSCRIBE} from "../../services";
import {context1} from "../../Context1";
import jwtDecode from "jwt-decode";
import * as RootNavigation from '../../navigation/RootNavigation';

const FormGroup = () => {

    const client2 = useApolloClient();

    const subscribe = () => {
        client2.subscribe({
            query: SUBSCRIBE,
            variables: {
                addTodoGroupId: 1,
            }
        }).subscribe({
            next: async (event) => {
                console.log('event ', event);
                console.log('finish');
                await refetch();
            },
        });
    };
    useEffect(() => {
        console.log("mounted group");
        subscribe();
    }, []);

    const token = useContext(context1);
    const [userId] = useState(jwtDecode(useContext(context1)).userId);

    const {loading, error, data, refetch} = useQuery(LISTUSERS_GROUP, {
        onError: (err) => console.log(err),
        onComplete: (data1) => console.log(data1),
    });

    if (loading) return (
        <SafeAreaView style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
            <ActivityIndicator size="large" color="#3730A3"/>
        </SafeAreaView>);
    return (
        <ScrollView contentContainerStyle={[t.flex1, t.itemsCenter, t.p3]}>
            {data && data.listUsersGrupo.reduce((acc, curr, key) => {
                if (parseInt(curr.id) !== userId) {
                    acc.push(<UserCard key={key} data={curr}
                                       onPress={async () => await RootNavigation.navigate('TodosUserGroup', {
                                           data: curr,
                                           token: token
                                       })}
                                       style={[t.wFull, t.h12, t.bgWhite, t.rounded, t.shadow, t.m2]}/>)
                }
                return acc;
            }, [])}

        </ScrollView>
    );
};
export default FormGroup;
