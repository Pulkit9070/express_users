const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateToken } = require("../middlewares/authMiddleware");

// router.use(validateToken);

router.get("/", validateToken, userController.getUsers);

//   /user/1234?empCode="1234"

router.get("/:empCode", validateToken, userController.getUserByEmpCode);


router.post("/", validateToken , userController.createUser);


router.put("/:empCode", validateToken, userController.updateUser);


module.exports = router;
