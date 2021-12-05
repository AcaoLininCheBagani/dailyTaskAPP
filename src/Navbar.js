import "./css/nav.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Navbar = () => {
  const nav = useNavigate();

  function logout(e) {
    e.preventDefault();

    const alr = window.confirm("are your sure?..");
    if (alr) {
      sessionStorage.removeItem("token");
      nav("/login");
    }
  }
  return (
    <nav className="navbar">
      <h1>Daily Task</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/createtask">Add task</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
