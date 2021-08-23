import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
  };
  const toggleSwitch = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#030a5d";
      showAlert("Dark Mode is Enabled.!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled.!", "success");
    }
  };
  return (
    <>
      <Router>
      <Navbar title="Parth" mode={mode} toggleSwitch={toggleSwitch} />
      <Alerts alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
              <TextArea
                heading="Write Your Text In The Below Box"
                mode={mode}
                showAlert={showAlert}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
