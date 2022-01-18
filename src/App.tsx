import components from "./components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { Navbar, SpellList, Error } = components;

  return (
    <Router>
      <div className="main__wrapper">
        <div className="nav__wrapper">
          <Navbar />
        </div>
        <div className="content__wrapper">
          <Routes>
            <Route path="/" element={<SpellList />} />

            {/* <Route path="/fav" element={<Favourites />} /> */}

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
