const sql = require("../db/dbConnect");
const { get } = require("../routes/route.note");

const modelPostNote = (req, res) => {
  const { title } = req.body;
  const insertNote = `INSERT INTO todo (title) VALUES (?)`;
  const Values = [title];
  sql.query(insertNote, Values, (err, result) => {
    if (err) {
      console.error(err, "Lỗi khi đẩy dữ liệu ");
      return res.status(500).json({ msg: "error" });
    }
    res.status(200).json({ msg: "thành công" });
  });
};

const modelGetNote = (res) => {
  const getTodo = `SELECT * FROM todo`;
  sql.query(getTodo, (err, result) => {
    if (err) {
      console.error(err, "Lỗi khi lấy dữ liệu ");
      return res.status(500).json({ msg: "error" });
    }
    res.status(200).json(result);
  });
};

const modelEditNote = (idParams, req, res) => {
  const updateFields = req.body;
  let dataTodo = {
    title: updateFields.title,
  };
  const editTodo = `UPDATE todo  SET ? WHERE id = ?`;
  sql.query(editTodo, [dataTodo, idParams], (err, result) => {
    if (err) {
      console.error(err, "Lỗi thay đổi todo");
      return res.status(500).json({ msg: "Error" });
    }
    res.status(200).json(result);
  });
};

const modelDeleteNote = (idParams, req, res) => {
  const deleteTodo = `DELETE FROM todo WHERE id = ?`;
  sql.query(deleteTodo, [idParams], (err, result) => {
    if (err) {
      console.error(err, "Lỗi xóa todo");
      return res.status(500).json({ msg: "Error" });
    }
    res.status(200).json(result);
  });
};
module.exports = {
  modelPostNote,
  modelGetNote,
  modelEditNote,
  modelDeleteNote,
};
