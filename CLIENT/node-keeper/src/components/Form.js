import { useEffect, useState } from "react";

function Form(props) {
  const [content, setContent] = useState("");
  const dataEdit = props.contentEdit;
  const handlChanged = (e) => {
    let valueContent = e.target.value;
    setContent(valueContent);
  };
  const handelAdded = () => {
    props.onAdd(content);
    setContent("");
  };

  useEffect(() => {
    if (dataEdit) {
      setContent(dataEdit);
    }
  }, [dataEdit]);

  return (
    <div className="">
      <div className="card-body">
        <div className="form-group p-2">
          <h5 className="card-title">Title</h5>
          <textarea
            className="form-control"
            id="addTxt"
            rows={3}
            placeholder="Take a note..."
            value={content}
            onChange={handlChanged}
          />
        </div>
        <button
          className="btn btn-primary"
          id="addBtn"
          style={{
            backgroundColor: "rgba(241,183,16,255)",
            border: "none",
            position: "absolute",
            top: "80px",
            right: "48px",
            width: "40px",
            height: "40px",
          }}
          onClick={handelAdded}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Form;
