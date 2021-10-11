import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';

const makeApolloClient = (token) => {
    /*const link = token ? new HttpLink({
                uri: 'http://192.168.100.4:4000',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }) :
            new HttpLink({
                uri: 'http://192.168.100.4:4000',
            });*/
    const link = token ? new WebSocketLink({
        uri: 'ws://192.168.100.4:5000',
        options: {
            reconnect: true,
            connectionParams: {
                headers: {
                    authorization: `Bearer ${token}`
                }
            },
        }
    }) : new WebSocketLink({
        uri: 'ws://192.168.100.4:5000',
        options: {
            reconnect: true,
        }
    });
    return new ApolloClient({
        link,
        cache: new InMemoryCache(),
    });
};
export default makeApolloClient;
