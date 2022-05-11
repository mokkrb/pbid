import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import './App.css';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API,
    cache: new InMemoryCache({
      addTypename: true,
    }),
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
