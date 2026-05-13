import { useState } from "react";
import EmployeeForm from "./EmployeeForm";

function Navbar({ onAddEmployee }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="bg-green-600 text-white px-6 py-3 flex justify-between items-center">
        <img src="https://tse4.mm.bing.net/th/id/OIP.pQ1_hhqwSNSad6zm_uD8KgHaHa?pid=Api&P=0&h=180" alt="Logo" className="h-10 w-10 rounded-xl hover:scale-110 transition delay-150 duration-300 ease-in-out ..." />
        <h1 className="text-xl font-bold">Daily Task Manager</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-100"
        >
          + Add Employee
        </button>
      </nav>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-96">
            <EmployeeForm
              onSubmit={(emp) => {
                onAddEmployee(emp);
                setShowForm(false);
              }}
            />
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div class="snap-x ...">
  <div class="snap-center ...">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/053/066/798/small_2x/free-logo-html-5-free-png.png" />
  </div>
  <div class="snap-center ...">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/053/066/798/small_2x/free-logo-html-5-free-png.png" />
  </div>
  <div class="snap-center ...">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/053/066/798/small_2x/free-logo-html-5-free-png.png" />
  </div>
  <div class="snap-center ...">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/053/066/798/small_2x/free-logo-html-5-free-png.png" />
  </div></div>
       
  
    </>
  );
}

export default Navbar;
