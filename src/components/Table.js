import React from "react";

function TableList(props) {
  return (
    <table className="table TableList">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <img className="img-responsive"
            src={props.picture.medium}
            alt={props.name.first + " " + props.name.last + " profile image"}
          />
          <td>{props.name.first} {props.name.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  )
}


export default TableList;