function EmployeeCard({ employee, onClick }) {
  return (

    <div
      onClick={onClick}
      className="bg-white  shadow-md rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg hover:scale-110 transition cursor-pointer delay-100 duration-100 ease-in-out ..."
    >
      <img
        src={employee.profile}
        alt={employee.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{employee.name}</h3>
        <p className="text-gray-600">{employee.des}</p>
      </div>
    </div>
   
  );
}

export default EmployeeCard;
