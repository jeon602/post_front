import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as PropTypes from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

function CkakraProvider(props) {
  return null;
}

CkakraProvider.propTypes = { children: PropTypes.node };
root.render(
  <React.StrictMode>
    <CkakraProvider>
      <App />
    </CkakraProvider>
  </React.StrictMode>,
);
