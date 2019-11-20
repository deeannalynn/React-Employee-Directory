import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Wrapper from "../Wrapper";
import Table from 'react-bootstrap/Table';
import employees from "../../../src/employees.json";
import "./style.css";


class EmployeeTable extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  sortComp () {
    let company = "Sunopia"
    switch (company){
      case "Sunopia":
    let employees = this.state.employees.filter(employee => employee.company === company);
    this.setState({ employees });
    // company = "Airconix"
    break;
    // case "Airconix":
    // let employees = this.state.employees.filter(employee => employee.company === company);
    // this.setState({ employees });
    // company = "Qualcore"
    // break;
    // case "Qualcore":
    // let employees = this.state.employees.filter(employee => employee.company === company);
    // this.setState({ employees });
    // company = "Thermolock"
    // break;
    // case "Thermolock":
    // let employees = this.state.employees.filter(employee => employee.company === company);
    // this.setState({ employees });
    // company = "Hivemind"
    // break;
    // case "Hivemind":
    // let employees = this.state.employees.filter(employee => employee.company === company);
    // this.setState({ employees });
    // company = "Sunopia"
    // break;
    default:
    console.log("YODa")
  };
};

  

  render() {
    return (<Wrapper>
              <Button onClick={this.sortComp} >Sort Companies</Button>
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
                <td>   
                 
                  <span onClick={() => employee.removeEmployee(employee.id)} className="remove">
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

export default EmployeeTable;
