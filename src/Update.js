import axios from "axios";
import { useParams, useNavigate } from "react-router";
import useFetch from "./useFetch";
import "./css/addTask.scss";
import { useState } from "react";
const Update = () => {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "bearer" + token;
  const nav = useNavigate();
  const { id } = useParams();
  const { data: tasks, isPending } = useFetch(
    "http://127.0.0.1:8000/api/auth/view/" + id
  );

  const [newtask, setNewtask] = useState("");
  const [newDesc, setNewdesc] = useState("");
  function updateTask(e) {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/auth/updatetask/" + id, {
        task: newtask,
        description: newDesc,
      })
      .then((response) => {
        alert(response.data.message);
        nav("/");
      });
  }
  return (
    <div className="create">
      <h2>Update Task</h2>
      {isPending && <div>Fetching data...</div>}
      {tasks &&
        tasks.map((task) => (
          <form className="addForm" onSubmit={updateTask} key={task.task_id}>
            <label htmlFor="">Task name:</label>
            <input
              type="text"
              required
              placeholder={task.task_name}
              onChange={(e) => {
                setNewtask(e.target.value);
              }}
            />
            <label htmlFor="">Task description:</label>
            <textarea
              required
              placeholder={task.description}
              onChange={(e) => {
                setNewdesc(e.target.value);
              }}
            ></textarea>

            <button>Update task</button>
          </form>
        ))}
    </div>
  );
};

export default Update;
