import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Process from "./routes/Process";
import Contact from "./routes/Contact";


export default function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/process" element={<Process/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      
    </div>
  );
}
