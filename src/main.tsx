import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./infrastructure/graphql/client";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={appRoutes} />
    </ApolloProvider>
  </React.StrictMode>,
);
