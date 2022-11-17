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
    Switch,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    console.log("From App");
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
