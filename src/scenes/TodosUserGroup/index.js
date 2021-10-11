import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FormTodosUserGroup from "../../components/organisms/FormTodosUserGroup";
import {ApolloProvider} from "@apollo/client";
import makeApolloClient from "../../apollo";
import {Context2} from "../../Context1";

const TodosUserGroup = ({navigation, route}) => {

    const [client, setClient] = useState(makeApolloClient(route.params.token));
    const {todos} = route.params.data;
    console.log(todos);
    return (
        <ApolloProvider client={client}>
            <View style={{flex: 1}}>
                <FormTodosUserGroup todos={todos}/>
            </View>
        </ApolloProvider>
    )
};
export default TodosUserGroup;
