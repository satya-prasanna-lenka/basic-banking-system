import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AllCustome from "./components/AllCustome";
import Histroy from "./components/Histroy";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllCustome />} />
        <Route path="/histroy" element={<Histroy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </div>
  );
}

export default App;
