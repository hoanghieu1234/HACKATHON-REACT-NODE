import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NavBar.css";

const NavBar = ({ getData, data }) => {
  console.log(123, data);
  const [task, setTask] = useState({});
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [method, setMethod] = useState("POST");
  const [action, setAction] = useState();

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleChangeDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("aaaa");
    e.preventDefault();
    setMethod("POST");
    setAction("/create");
    if (!content || !dueDate || !status || !userName) {
      setError("Please fill in all fields");
      return;
    }
    const newTask = {
      content,
      date: dueDate,
      status: Number(status),
      assigned: userName,
    };
    setTask(newTask);
    axios
      .post("http://localhost:8000/api/v1/user", newTask)
      .then((response) => {
        console.log(response.data);
        setContent("");
        setDueDate("");
        setStatus("");
        setUserName("");
        setError("");
        getData();
      })
      .catch((errors) => {
        console.error(errors);
      });
  };
  useEffect(() => {
    if (data != null) {
      setContent(data.content);
      setDueDate(data.date.split("T")[0]);
      setStatus(data.status);
      setUserName(data.assigned);
    }
  }, [data]);

  const handleEdit = () => {
    const newTask = {
      content,
      date: dueDate,
      status: Number(status),
      assigned: userName,
    };
    setTask(newTask);
    axios
      .patch(`http://localhost:8000/api/v1/user/${data.id}`, newTask)
      .then((response) => {
        console.log(response.data);
        setContent("");
        setDueDate("");
        setStatus("");
        setUserName("");
        setError("");
        getData();
      })
      .catch((errors) => {
        console.error(errors);
      });
  };
  return (
    <div className="nav">
      <form id="form-user" method={method} action={action}>
        <input
          type="text"
          value={content}
          name="content"
          placeholder="content"
          id="input"
          onChange={handleChangeInput}
        />
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          id="input"
          onChange={handleChangeDueDate}
        />
        <select
          id="input"
          name="status"
          value={status}
          onChange={handleChangeStatus}
        >
          <option value="1">pending</option>
          <option value="2">reject</option>
          <option value="3">fullfill</option>
        </select>
        <input
          type="text"
          placeholder="name"
          name="userName"
          id="input"
          value={userName}
          onChange={handleChangeUserName}
        />

        {data ? (
          <button onClick={handleEdit} className="btn ">
            Edit
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn btn-submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default NavBar;
