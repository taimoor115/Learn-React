import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Product from "./Product.jsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
// Import css files

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
]);

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 10000,
//     },
//   },
// });
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <QueryClientProvider client={queryClient}>
  //   {/* <RouterProvider router={router} /> */}
  <App />
  //   <ReactQueryDevtools initialIsOpen={false} />
  // </QueryClientProvider>
);
