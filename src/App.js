import React from "react";
import "./App.css";
import Form from "./Form.js";
import Footer from "./Footer.js";
//import Overview from "./Overview.js";
//import Time from "./Time.js";
export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Form />
        <Footer />
      </div>
    </div>
  );
}
