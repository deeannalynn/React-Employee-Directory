import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/jumbotron";
import employees from "../src/employees.json";

class App extends Component {
  state = {
    employees
  };
  

  return () {
    return (
      <Wrapper>
        <Jumbotron/>
        <Table/>
      </Wrapper>
    )}
}


export default App;
