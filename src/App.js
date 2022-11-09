import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/common/navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
