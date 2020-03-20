import React from "react";

export default function Users(props) {

  return (
    <div>
      <table className="table table-hover">
        <thead className="head">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>malka</td>
            <td>younso</td>
            <td>malak-y@live.com</td>
            <td>1993-01-01</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}