import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext, themeState } from "./contexts/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={themeState}> */}
      <App />
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>
);
