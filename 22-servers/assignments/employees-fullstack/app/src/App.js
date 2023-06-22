import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ employee_name: '', date_hired: '', city_id: '', employee_number: '' });
  const [update, setUpdate] = useState({});
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://localhost:3030/employees')
      .then((res) => res.json())
      .then((res) => setEmployees([...res]));
  }

  function deleteEmployee(employee_number) {
    fetch(`http://localhost:3030/employees/${employee_number}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => getData());
  }

  function addEmployee() {
    fetch(`http://localhost:3030/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then((res) => res.json())
      .then(() => {
        getData();
        setNewEmployee({ employee_name: '', date_hired: '', city_id: '', employee_number: '' });
      });
    setHidden(!hidden);
  }

  function completeUpdate(employee) {
    fetch(`http://localhost:3030/employees`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then(() => getData())
      .then(() => updateEmployee());
  }

  function updateEmployee(employee_number) {
    const newUpdate = { ...update };

    for (let employee of employees) {
      newUpdate[employee.employee_number] = false;
    }

    setUpdate(newUpdate);
    if (employee_number !== undefined) {
      setUpdate({ ...newUpdate, [employee_number]: !update[employee_number] });
    }
  }

  function updateEmployeeInfo(employee, e) {
    employee[e.target.getAttribute('field')] = e.target.value;
    for (let i in employees) {
      if (employee.employee_number === employees[i].employee_number) {
        let updatedEmployees = [...employees];
        updatedEmployees[i] = employee;
        setEmployees([...updatedEmployees]);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {employees.map((employee) => {
          return !update[employee.employee_number] ?
            <div className="employeeCard" key={employee.employee_number}>
              <h3>{employee.employee_name}</h3>
              <p>{employee.employee_number}</p>
              <p>{employee.date_hired}</p>
              <p>{employee.city_id}</p>
              <button onClick={() => updateEmployee(employee.employee_number)}>Update</button>
              <button onClick={() => deleteEmployee(employee.employee_number)}>Delete</button>
            </div> :
            <div className="employeeCard" key={employee.employee_number}>
              <input defaultValue={employee.employee_name} field="employee_name" placeholder="Employee Name" onChange={(e) => updateEmployeeInfo(employee, e)} />
              <input defaultValue={employee.date_hired} field="date_hired" placeholder="Date Hired" onChange={(e) => updateEmployeeInfo(employee, e)} />
              <input defaultValue={employee.city_id} field="city_id" placeholder="City ID" onChange={(e) => updateEmployeeInfo(employee, e)} />
              <input defaultValue={employee.employee_number} field="employee_number" placeholder="Employee Number" onChange={(e) => updateEmployeeInfo(employee, e)} />

              <button onClick={() => { updateEmployee(employee.employee_number); getData(); }}>Cancel</button>
              <button onClick={() => completeUpdate(employee)}>Update</button>
            </div>
        })}
        {hidden ?
          <button onClick={() => setHidden(!hidden)}>Add New Employee</button> :
          <div className="employeeCard">
            <h3>Employee Name:&nbsp;<input onChange={(e) => setNewEmployee({ ...newEmployee, employee_name: e.target.value })} value={newEmployee.employee_name} placeholder="Employee Name" /></h3>
            <br />
            <p>Date Hired:&nbsp;<input onChange={(e) => setNewEmployee({ ...newEmployee, date_hired: e.target.value })} value={newEmployee.date_hired} placeholder="Date Hired" /></p>
            <br />
            <p>City ID:&nbsp;<input onChange={(e) => setNewEmployee({ ...newEmployee, city_id: e.target.value })} value={newEmployee.city_id} placeholder="City ID" /></p>
            <br />
            <p>Employee Number:&nbsp;<input onChange={(e) => setNewEmployee({ ...newEmployee, employee_number: e.target.value })} value={newEmployee.employee_number} placeholder="Employee Number" /></p>
            <br />
            <button onClick={() => addEmployee()}>Submit</button>
          </div>}
      </header>
    </div>
  );
}

export default App;
