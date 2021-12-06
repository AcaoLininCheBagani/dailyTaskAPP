import "./css/login.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [em, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/auth/adminlogin";
    axios
      .post(url, {
        email: em,
        password: pw,
      })
      .then((response) => {
        const token = response.data.access_token;
        sessionStorage.setItem("token", token);
        const link = document.getElementById("link-none");
        link.style.display = "grid";
        navigate("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Email or password is incorrect");
        window.location.reload(true);
      });
  }

  useEffect(() => {
    const link = document.getElementById("link-none");
    link.style.display = "none";
  }, []);

  return (
    <div className="log-div">
      <div className="log-form">
        <form onSubmit={login}>
          <div className="dl">
            <h3 className="login">ADMIN LOGIN</h3>
          </div>
          <div className="dl1">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="dl2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="dl3">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
