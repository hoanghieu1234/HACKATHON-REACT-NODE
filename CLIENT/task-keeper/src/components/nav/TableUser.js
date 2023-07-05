import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const TableUser = (props) => {
  const informUser = props.contentUser;
  const [selectedInform, setSelectInform] = useState(null);
  const editData = props.handleEditData;

  return (
    <div className="user">
      <table>
        <tr>
          <th>#</th>
          <th>Content</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th>Action</th>
        </tr>
        {informUser !== null &&
          informUser.map((inform, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{inform.content}</td>
                <td>{inform.date}</td>
                <td>{inform.status}</td>
                <td>{inform.assigned}</td>
                <td>
                  <button
                    className="btn-1"
                    onClick={() => {
                      editData(inform);
                    }}
                  >
                    Update
                  </button>
                  <button className="btn-2">Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default TableUser;
