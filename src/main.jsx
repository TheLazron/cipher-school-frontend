import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import UserContextProvider from "./context/userContext";
import App from "./App.jsx";
// import "./index.css";
import customTheme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>
);
