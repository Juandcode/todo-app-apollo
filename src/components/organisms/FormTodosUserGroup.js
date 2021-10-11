import React from 'react';
import TodoCard from "../molecules/TodoCard";
import {t} from "react-native-tailwindcss";
import {View, Text,ScrollView} from "react-native";
//import {ScrollView} from "react-native-gesture-handler";

const FormTodosUserGroup = ({todos}) => {
    return (
        <View style={[t.flex1, t.z0]}>
            <ScrollView contentContainerStyle={[t.mX4, t.itemsCenter, t.z0]}>
            {todos.map((e, key) => <TodoCard key={key} data={e}
                                             style={[t.wFull, t.h12, t.bgWhite, t.rounded, t.shadow, t.m2]}/>)}
            </ScrollView>
        </View>
    );
};
export default FormTodosUserGroup;
