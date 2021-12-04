import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Home = () => {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "bearer" + token;

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/auth/check")
      .then((response) => {
        const data = response.data;
        if (data == 1) {
          console.log("AUTHENTICATED");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);
  return (
    <div className="homes">
      <h2>HELLO WORLD</h2>
    </div>
  );
};
export default Home;
