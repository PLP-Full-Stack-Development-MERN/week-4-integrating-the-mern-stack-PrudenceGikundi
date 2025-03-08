import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Task</Link>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task._id} className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
            <div>
              <h2 className="font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <p className="text-sm text-gray-600">Status: {task.status}</p>
            </div>
            <div className="space-x-2">
              <Link to={`/edit/${task._id}`} className="bg-green-500 text-white px-3 py-1 rounded">Edit</Link>
              <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
