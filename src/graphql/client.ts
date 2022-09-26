import { ApolloClient, createHttpLink } from "@apollo/client/core";
import { cache } from "./cache";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BASE_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache,
});
