import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/form/NavBar";
import TableUser from "./components/nav/TableUser";
import Api from "./api/axios";
import { useEffect, useState } from "react";

function App() {
  const [contentUser, setContentUser] = useState([]);
  const [editData, setEditData] = useState(null);
  console.log(editData);
  // Edit Data
  const handleEditData = (data) => {
    setEditData(data);
  };
  // Get Data
  const getData = () => {
    Api({
      method: "GET",
      url: "api/v1/user",
    }).then((data) => {
      setContentUser(data.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <NavBar getData={getData} data={editData} />
      <TableUser contentUser={contentUser} handleEditData={handleEditData} />
    </div>
  );
}

export default App;
