import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Listproduct from "./components/Listproduct";
import Api from "./api/axios";
import Nav from "./components/Nav";
function App() {
  const [contentList, setContentlist] = useState([]);
  const [contentEdit, setContentedit] = useState(null);
  const onAdd = (content) => {
    Api({
      method: "POST",
      data: {
        title: content,
      },
      url: "api/v1/todo",
    }).then((data) => {
      console.log("ok");
    });
  };

  const handleDelete = (id) => {
    Api({
      method: "DELETE",

      url: `api/v1/todo/${id}`,
    }).then((data) => {
      console.log("ok");
    });
  };
  useEffect(() => {
    Api({
      method: "GET",
      url: "api/v1/todo",
    }).then((data) => {
      setContentlist(data.data);
    });
  });
  return (
    <div>
      <Nav />
      <div className="container my-3">
        <Form onAdd={onAdd} contentEdit={contentEdit} />
        <h3>Show to me</h3>
        <hr />
        <Listproduct contentList={contentList} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
