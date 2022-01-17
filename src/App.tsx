import components from "./components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { Navbar } = components;

  return (
    <Router>
      <div className="main__wrapper">
        <div className="nav__wrapper">
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
