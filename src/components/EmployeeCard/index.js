import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <table className="table">
      <tbody className="content">
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.company}</td>
          <td>{props.email}</td>
        </tr>
        </tbody>
    <span onClick={() => props.removeEmployee(props.id)} className="remove">
      𝘅
      </span>
    </table >
  );
}

export default EmployeeCard;
