import React, {useState} from 'react';
import MyDrawer from "./drawer-navigator";
import {ApolloProvider} from "@apollo/client";
import makeApolloClient from "../apollo";
import {Context2} from "../Context1";

const Main = ({navigation, route}) => {
    const [client, setClient] = useState(makeApolloClient(route.params.token));
    return (
        <ApolloProvider client={client}>
            <Context2 session={route.params.token}>
                <MyDrawer/>
            </Context2>
        </ApolloProvider>
    );
};

export default Main;
