import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";
import Update from "./Update";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view/:id" element={<TaskDetails />} />
            <Route path="/createtask" element={<AddTask />} />
            <Route path="/viewUP/:id" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
