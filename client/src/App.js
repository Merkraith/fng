import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MapboxGLMap from "./components/MapboxGLMap/MapboxGLMap";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <MapboxGLMap />
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
