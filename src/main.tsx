import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootswatch/dist/litera/bootstrap.min.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App title={"Pichanga Total"} />
  </React.StrictMode>
);
