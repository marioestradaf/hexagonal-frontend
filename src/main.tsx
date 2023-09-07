import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./infrastructure/graphql/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./index.css"
import { AuthorizationProvider } from "./infrastructure/providers/AuthorizationProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthorizationProvider>
        <RouterProvider router={routes} />
      </AuthorizationProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
