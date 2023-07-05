const sql = require("../db/dbConnect");

const modelPostUser = (req, res) => {
  const { content, date, status, assigned } = req.body;
  const insert = `INSERT INTO inform (content,date,status,assigned) VALUES (?,?,?,?)`;
  const Values = [content, date, status, assigned];
  sql.query(insert, Values, (err, result) => {
    if (err) {
      console.error(err, "Lỗi khi đẩy dữ liệu ");
      return res.status(500).json({ msg: "error" });
    }
    res.status(200).json({ msg: "thành công" });
  });
};

const modelGetUser = (res) => {
  const getUser = `SELECT * FROM inform`;
  sql.query(getUser, (err, result) => {
    if (err) {
      console.error(err, "Lỗi khi lấy dữ liệu ");
      return res.status(500).json({ msg: "error" });
    }
    res.status(200).json(result);
  });
};

const modelEditUser = (idParams, req, res) => {
  const updateFields = req.body;
  let data = {
    content: updateFields.content,
    date: updateFields.date,
    status: updateFields.status,
    assigned: updateFields.assigned,
  };
  const editUser = `UPDATE inform  SET ? WHERE id = ?`;
  sql.query(editUser, [data, idParams], (err, result) => {
    if (err) {
      console.error(err, "Lỗi thay đổi user");
      return res.status(500).json({ msg: "Error" });
    }
    res.status(200).json(result);
  });
};

const modelDeleteUser = (idParams, req, res) => {
  const deleteUser = `DELETE FROM inform WHERE id = ?`;
  sql.query(deleteUser, [idParams], (err, result) => {
    if (err) {
      console.error(err, "Lỗi xóa User");
      return res.status(500).json({ msg: "Error" });
    }
    res.status(200).json(result);
  });
};

module.exports = {
  modelPostUser,
  modelGetUser,
  modelEditUser,
  modelDeleteUser,
};
