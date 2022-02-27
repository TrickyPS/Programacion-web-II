const { Router } = require("express");
const {
  addPost,
  getAll,
  getOne,
  updatePost,
  deletePost,
} = require("./../controllers/posts.controller");

const router = Router();

router.post("/", addPost);
router.get("/:id", getOne);
router.get("/", getAll);
router.delete("/:id", deletePost); // eliminado permanente
router.put("/:id", updatePost); //actualiza y baja logica

module.exports = router;
