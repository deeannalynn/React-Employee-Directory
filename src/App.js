import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import EmployeeCard from "./components/EmployeeCard"
import Table from 'react-bootstrap/Table';

import employees from "./employees.json";
// import TopRow from "./components/TopRow";
// import './App.css';

class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };


  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        {/* <TopRow /> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <tr>
                <th>{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.company}</td>
                <td>{employee.email}</td>
                <td>    <span onClick={() => employee.removeEmployee(employee.id)} className="remove">
                  𝘅
                        </span>
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </Wrapper>
    );
  }
}


export default App;
