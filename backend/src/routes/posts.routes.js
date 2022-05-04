const { Router } = require("express");
const {
  addPost,
  getAll,
  getOne,
  updatePost,
  deletePost,
} = require("./../controllers/posts.controller");
const md_auth = require("../middlewares/auth");

const router = Router();

router.post("/", [md_auth.ensureAuth] ,addPost);
router.get("/:id", getOne);
router.get("/", getAll);
router.delete("/:id", [md_auth.ensureAuth], deletePost); // eliminado permanente
router.put("/:id", [md_auth.ensureAuth], updatePost); //actualiza y baja logica

module.exports = router;
