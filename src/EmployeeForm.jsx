import { useState } from "react";

function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [profile, setProfile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !des || !profile) return;

    // send new employee up to App.jsx
    onSubmit({ name, des, profile });

    // clear form
    setName("");
    setDes("");
    setProfile("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-6 max-w-md">
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 mb-3 w-full rounded"
      />

      <input
        type="text"
        placeholder="Designation"
        value={des}
        onChange={(e) => setDes(e.target.value)}
        className="border px-3 py-2 mb-3 w-full rounded"
      />

      <input
        type="text"
        placeholder="Profile Image URL"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        className="border px-3 py-2 mb-3 w-full rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;
