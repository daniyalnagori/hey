import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://zealous-newton-4f43c3/.netlify/functions/graphql_faunadb',
    fetch,
  }),
  cache: new InMemoryCache()
});
