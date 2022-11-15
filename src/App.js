import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import Story from "./pages/story";
import Timeline from "./pages/timeline";
import Navbar from "./components/common/navbar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    return (
        <>
            {/* <Navbar />
            <Home /> */}
            <Navbar />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Home replace to="/home" />}
                    />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/projects" exact element={<Projects />} />
                    <Route path="/story" exact element={<Story />} />
                    <Route path="/timeline" exact element={<Timeline />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
