import React from "react";
import Table from 'react-bootstrap/Table';
import "./style.css";


function EmployeeCard(props) {

  return (
    <Table>
      <tbody>
      {props.employees.map(employee => (
        <tr>
        <th >{props.id}</th>
        <td>{props.name}</td>
        <td>{props.company}</td>
        <td>{props.email}</td>
        <td>    <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
        </span>
        </td>
        </tr>
      ))}
        </tbody>
    </Table>
  );
}

export default EmployeeCard;
