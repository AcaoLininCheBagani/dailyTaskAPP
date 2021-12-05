import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./css/addTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [desc, setDescription] = useState("");
  const nav = useNavigate();
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "bearer" + token;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/auth/createtask", {
        taskname: task,
        description: desc,
      })
      .then((response) => {
        alert(response.data.message);
        nav("/");
      });
  };
  return (
    <div className="create">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit} className="addForm">
        <label htmlFor="">Task name:</label>
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          required
        />
        <label htmlFor="">Task description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button>Add task</button>
      </form>
    </div>
  );
};

export default AddTask;
