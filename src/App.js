import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
} from "react-router-dom";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";
import Update from "./Update";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view/:id" element={<TaskDetails />} />
            <Route path="/createtask" element={<AddTask />} />
            <Route path="/viewUP/:id" element={<Update />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
