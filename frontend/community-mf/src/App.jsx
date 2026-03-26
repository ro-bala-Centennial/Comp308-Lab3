import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import CreateHelpRequest from "./components/CreateHelpRequest";
import HelpRequestList from "./components/HelpRequestList";

const client = new ApolloClient({
  uri: "http://localhost:4002/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Community Engagement</h1>
        <CreatePost />
        <hr />
        <PostList />
        <hr />
        <CreateHelpRequest />
        <hr />
        <HelpRequestList />
      </div>
    </ApolloProvider>
  );
}