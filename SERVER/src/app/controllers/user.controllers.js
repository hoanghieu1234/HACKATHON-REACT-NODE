const controlUser = require("../model/model.user");

const postUser = (req, res) => {
  controlUser.modelPostUser(req, res);
};

const getUser = (req, res) => {
  controlUser.modelGetUser(res);
};

const editUser = (req, res) => {
  const idParams = req.params.id;
  controlUser.modelEditUser(idParams, req, res);
};
const deleteUser = (req, res) => {
  const idParams = req.params.id;
  controlUser.modelDeleteUser(idParams, req, res);
};
module.exports = {
  postUser,
  getUser,
  editUser,
  deleteUser,
};
