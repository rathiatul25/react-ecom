import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloLink } from '@apollo/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// For multiple ueries
// const customerLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql',
//     credentials: 'include',
//     // other link options
// })
// const fieldLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql',
//     credentials: 'include',
//     // other link options
// })

// const customerAndLink = ApolloLink.split(
//     (operation) => operation.getContext().clientName === 'customer',
//     // if 
//         customerLink,
//     //else
//         fieldLink
// );

// const usersLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql',
//     credentials: 'include',
//     // other link options
// })
// const client = new ApolloClient({
//     link: ApolloClient.split(
//         (operation) => operation.getContext().clientName === 'users',
//         // if users - go to userslink
//         usersLink,
//         // else - go to customer link
//         customerAndLink
//     ),
//     cache: new InMemoryCache({
//         addTypename: false
//     }),
//     uri: "http://localhost:3000/users"
// });

const client = new ApolloClient({
    // cache: new InMemoryCache({
    //     addTypename: false
    // }),
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/users"
});

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
