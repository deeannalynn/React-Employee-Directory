import React from "react";
import Table from 'react-bootstrap/Table';
import "./style.css";
import TopRow from "../TopRow";

function EmployeeCard(props) {
  return (


<tr>
<th scope="row">{props.id}</th>
<td>{props.name}</td>
<td>{props.company}</td>
<td>{props.email}</td>
<td>    <span onClick={() => props.removeEmployee(props.id)} className="remove">
𝘅
</span>
</td>
</tr>
