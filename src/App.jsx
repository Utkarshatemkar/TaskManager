import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import EmployeeCard from "./EmployeeCard";
import TaskBoard from "./TaskBoard";

function App() {
  const [employees, setEmployees] = useState(() => {
    // load from localStorage on first render
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // keep localStorage updated whenever employees change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, tasks: [] }]);
  };

  const updateTasks = (employeeName, newTasks) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.name === employeeName ? { ...emp, tasks: newTasks } : emp
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onAddEmployee={addEmployee} />

      {!selectedEmployee ? (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp, index) => (
            <EmployeeCard
              key={index}
              employee={emp}
              onClick={() => setSelectedEmployee(emp)}
            />
          ))}
        </div>
      ) : (
        <TaskBoard
          employee={selectedEmployee}
          onBack={() => setSelectedEmployee(null)}
          onUpdateTasks={updateTasks}
        />
      )}
    </div>
  );
}

export default App;
