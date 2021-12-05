import { useParams } from "react-router";
import useFetch from "./useFetch";
import "./css/taskView.scss";
import axios from "axios";
import { useNavigate } from "react-router";

const TaskDetails = () => {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "bearer" + token;
  const nav = useNavigate();

  const { id } = useParams();
  const { data: tasks, isPending } = useFetch(
    "http://127.0.0.1:8000/api/auth/view/" + id
  );
  function del(e) {
    e.preventDefault();
    const alr = window.confirm("Do you want to delete task?");
    if (alr) {
      axios
        .delete(`http://127.0.0.1:8000/api/auth/deletetask/${id}`)
        .then((response) => {
          console.log(response.data.message);
          nav("/");
        });
    }
  }
  function upd(e) {
    e.preventDefault();
    nav(`/viewUP/${id}`);
  }
  return (
    <div className="task-details">
      {isPending && <div>Fetching data...</div>}
      {tasks && (
        <div className="task-details-view">
          {tasks.map((task) => (
            <div key={task.task_id}>
              <article>
                <h2>Task : {task.task_name}</h2>
                <div>{task.description}</div>
                <h3>Created : {task.date}</h3>
                <p>Added by : {task.name}</p>
                <div className="buttons">
                  <button id="b1" onClick={upd}>
                    Update
                  </button>
                  <button id="b2" onClick={del}>
                    Delete
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
