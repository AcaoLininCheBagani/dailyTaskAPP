import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./css/task.scss";

const Home = () => {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "bearer" + token;
  const nav = useNavigate();

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .post("http://127.0.0.1:8000/api/auth/check", {
        signal: abortCont.signal,
      })
      .then((response) => {
        const data = response.data;
        if (data === 1) {
          console.log("AUTHENTICATED");
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          nav("/login");
        }
      });
    return () => abortCont.abort();
  }, []);

  const { data: tasks, isPending } = useFetch(
    "http://127.0.0.1:8000/api/auth/viewtask"
  );
  return (
    <div className="homes">
      {isPending && <div>Fetching data.</div>}
      {tasks && (
        <div className="task-list">
          <h2>TASK</h2>
          {tasks.map((task) => (
            <div className="task-preview" key={task.task_id}>
              <Link
                to={`/view/${task.task_id}`}
                style={{ textDecoration: "none" }}
              >
                <h3>{task.task_name}</h3>
                <p>{task.name}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
