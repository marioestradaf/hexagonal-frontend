import React from "react"
import ReactDOM from "react-dom/client"
import client from "./infrastructure/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./application/routes";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={AppRoutes} />
    </ApolloProvider>
  </React.StrictMode>,
)


