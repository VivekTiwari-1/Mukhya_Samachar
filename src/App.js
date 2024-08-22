import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable DarkMode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable LightMode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setModeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <LoadingBar
          height={2}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pagesize={20}
                country={"in"}
                category={"general"}
              />
            }
          />
          {/* <Route exact path="/business"><News setProgress={setProgress} key="business" pagesize={20} country={'in'} category={'business'} /></Route> --> Wrong Syntax for Routes*/}
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pagesize={20}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pagesize={20}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pagesize={20}
                country={"in"}
                category={"technology"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pagesize={20}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pagesize={20}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pagesize={20}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
