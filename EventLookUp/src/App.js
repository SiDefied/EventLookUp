import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import CreateEvent from "./Components/CreateEvent";
import Events from "./Screens/Events";
import Login from "./Components/Login";
import Register from "./Components/Register";
import 'C:/Users/shivtej.deshmukh/Downloads/bootstrap-4.0.0/bootstrap-4.0.0/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/events/add/" element={<CreateEvent/>} />
          <Route exact path="/events/view" element={<Events/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
