import "./css/register.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nm, setName] = useState("");
  const [em, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/createperson",
      data: {
        pname: nm,
        pemail: em,
        ppw: pw,
      },
    }).then((response) => {
      alert(response.data.message);
      navigate("/login");
    });
  }

  return (
    <div className="reg-div">
      <div className="reg-form">
        <form onSubmit={register}>
          <div className="d">
            <h4>REGISTER</h4>
          </div>
          <div className="d1">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
                console.log(nm);
              }}
            />
          </div>
          <div className="d3">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(em);
              }}
            />
          </div>
          <div className="d4">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(pw);
              }}
            />
          </div>
          <div className="d5">
            <button type="submit">Sign up</button>
            <p>
              Already registered <a href="/login">sign in?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
