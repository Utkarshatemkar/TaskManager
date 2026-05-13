import { useState, useEffect } from "react";

function TaskBoard({ employee, onBack, onUpdateTasks }) {
  const [tasks, setTasks] = useState(employee.tasks || []);

  // keep tasks synced with App.jsx
  useEffect(() => {
    onUpdateTasks(employee.name, tasks);
  }, [tasks]);

  const addTask = () => {
    const today = new Date().toLocaleDateString(); // e.g. "13/05/2026"
    setTasks([...tasks, { text: "", status: "Pending", date: today }]);
  };

  const updateTask = (i, field, value) => {
    const newTasks = [...tasks];
    newTasks[i][field] = value;
    setTasks(newTasks);
  };

  const deleteTask = (i) => setTasks(tasks.filter((_, idx) => idx !== i));

  return (
    
  
    <div class="p-6">
      <button
        onClick={onBack}
        className="mb-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">{employee.name}'s Daily Tasks</h2>
      <button
        onClick={addTask}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 hover:bg-green-700"
      >
        + Add Task
      </button>

  

      {tasks.length > 0 ? (
        <div class="scrollbar-thumb-slate-900 scrollbar-track-slate-200 md:scrollbar-thumb-sky-700 ...">
        <table className="w-full border-collapse border border-gray-300 ">

          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Task</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td className="border p-2">{task.date}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => updateTask(i, "text", e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <select
                    value={task.status}
                    onChange={(e) => updateTask(i, "status", e.target.value)}
                    className="border px-2 py-1"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => deleteTask(i)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
      ) : (
        <p className="text-gray-500">No tasks yet.</p>
      )}
    </div>
  );
}

export default TaskBoard;
