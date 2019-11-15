import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard"
import employees from "./employees.json";
import './App.css';

class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };


  return() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            name={employee.name}
            company={employee.company}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
