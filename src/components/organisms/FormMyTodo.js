import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {t} from "react-native-tailwindcss";
import {gql, useLazyQuery, useQuery, useMutation, useApolloClient} from "@apollo/client";
import {SUBSCRIBE, TODOLIST} from "../../services";
import {ScrollView, TouchableHighlight} from "react-native-gesture-handler";
import Search from "../molecules/Search";
import Card from "../atoms/Card";
import TodoCard from "../molecules/TodoCard";
import {COMPLETETODO} from "../../services";

const FormMyTodo = () => {


    const [changeCompleteTodo, {loading: loading1, error: error1, data: data1}] = useMutation(COMPLETETODO, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.log(err);
        }
    });
    const {loading, error, data, refetch} = useQuery(TODOLIST);

    if (loading) return (
        <SafeAreaView style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
            <ActivityIndicator size="large" color="#3730A3"/>
        </SafeAreaView>);
    if (error) return <Text>error</Text>;
    return (
        <View style={[t.flex1, t.z0]}>
            <Search style={[t.flexRow, t.mT4, t.mB2, t.mX4, t.h12, t.justifyBetween, {borderWidth: 0}]}/>
            <ScrollView contentContainerStyle={[t.mX4, t.itemsCenter, t.z0]}>
                {data.todosUser.map((e, key) => <TodoCard key={key} data={e}
                                                          editable={true}
                                                          onPress={() => {
                                                              loading1 === false && changeCompleteTodo(
                                                                  {
                                                                      variables: {
                                                                          id: parseInt(e.id),
                                                                          completado: !e.completado
                                                                      }
                                                                  }
                                                              )
                                                          }}
                                                          style={[t.shadow, t.wFull, t.h16, t.bgWhite, t.rounded, t.m2]}/>
                )}
            </ScrollView>
        </View>
    );
};
export default FormMyTodo;
