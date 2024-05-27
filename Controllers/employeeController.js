const employees = [
  { id: 1, Emp_name: "John", designation: "QA" },
  { id: 2, Emp_name: "Doe", designation: "FSD" },
  { id: 3, Emp_name: "Adam", designation: "DevOps Engineer" },
  { id: 4, Emp_name: "Stark", designation: "UI/UX Designer" },
  { id: 5, Emp_name: "Michael", designation: "Solution Architect" },
];

//getcall or get method
export const getEmployeeDetail = (req, res) => {
  res.status(200).json({ data: employees });
};
//get by id
export const getEmployeeDetailId = (req, res) => {
  const empId = req.params.id; //4
  console.log(empId);

  const empDetail = employees.find((ele) => ele.id == empId); //4 ===4
  if (!empDetail) {
    return res.status(404).send("Employee Not Found");
  }
  res.status(200).json({ message: "Employee Details", data: empDetail });
};
//create employee or post method
export const createEmployee = (req, res) => {
  const { Emp_name, designation } = req.body;
  const newEmployee = {
    id: employees.length + 1,
    Emp_name: Emp_name,
    designation: designation,
  };
  employees.push(newEmployee);

  res
    .status(200)
    .json({ message: "Employee created successfully", data: newEmployee });
};
//edit employee or put method
export const editEmployee = (req, res) => {
  const empId = req.params.id;
  const { Emp_name, designation } = req.body;
  const index = employees.findIndex((ele) => ele.id == empId);
  if (index === -1) {
    return res.status(404).send("Employee detail not found");
  }
  employees[index].Emp_name = Emp_name;
  employees[index].designation = designation;
  res
    .status(200)
    .json({ message: "Employee Updated Successfully", data: employees[index] });
};
//delete employee or delete method
export const deleteEmployee = (req, res) => {
  const empId = req.params.id;
  const index = employees.findIndex((ele) => ele.id == empId);
  if (index === -1) {
    return res.status(404).send("Employee detail not found");
  }
  employees.splice(index, 1);
  res.status(200).json({ message: "Employee Deleted Successfully" });
};
