import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeTable from "./components/EmployeeTable"
import SearchBar from './components/SearchBar';


class App extends Component {
  // state = {
  //   employees
  // };

  // removeEmployee = id => {
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  //   this.setState({ employees });
  // };


  render() {
    return (
      <React.Fragment>
        <Title/>
        <SearchBar />
        <EmployeeTable />
      </React.Fragment>
    );
  }
}


export default App;
