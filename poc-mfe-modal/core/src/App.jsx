import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Modal from "./components/modal";

const App = () => {
  return (
    <div className="container">
      <Modal />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
