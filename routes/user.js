let express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  userLogin,
} = require("../controller/user");

router.get("/allUsers", getAllUsers);
router.post("/register", createUser);
router.post("/login", userLogin);

module.exports = router;
