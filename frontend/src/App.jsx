import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./layouts/layout";
import { useState } from "react";
import { DarkModeContext } from "./components/Context/DarkModeProvider";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/logged">
                <Route path="admin" element={<Admin />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
