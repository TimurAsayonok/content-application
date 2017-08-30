import { ApolloClient, createNetworkInterface } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://mobileapi.wp.pl/v1/graphql',
  }),
});

export default client;