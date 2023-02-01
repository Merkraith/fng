import React from "react";
import { BrowserRouter } from "react-router-dom";
// import MapboxGLMap from "./components/MapboxGLMap/MapboxGLMap";
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Main/>
      {/* <MapboxGLMap /> */}
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
