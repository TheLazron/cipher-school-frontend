import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import UserContextProvider from "./context/userContext";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
import customTheme from "./styles/theme.js";
import FollowersPage from "./pages/FollowersPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ChakraProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/followers" element={<FollowersPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>
);
