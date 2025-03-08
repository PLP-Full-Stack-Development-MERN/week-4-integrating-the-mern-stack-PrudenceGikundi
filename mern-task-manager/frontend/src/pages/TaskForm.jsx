import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", status: "pending" });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/tasks/${id}`)
        .then((res) => setTask(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? axios.put : axios.post;
    const url = id ? `http://localhost:5000/api/tasks/${id}` : "http://localhost:5000/api/tasks";

    request(url, task)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" className="w-full p-2 border rounded" required />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task Description" className="w-full p-2 border rounded" />
        <select name="status" value={task.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">{id ? "Update Task" : "Create Task"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
