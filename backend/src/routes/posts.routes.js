const { Router } = require("express");
const {
  addPost,
  getAll,
  getOne,
  updatePost,
  deletePost,
  getMyPosts,
  getMyFavorites,
  getOtherPosts,
} = require("./../controllers/posts.controller");
const md_auth = require("../middlewares/auth");

const router = Router();

router.post("/", [md_auth.ensureAuth] ,addPost);
router.get("/:id", getOne);
router.get("/", getAll);
router.delete("/:id", [md_auth.ensureAuth], deletePost); // eliminado permanente
router.put("/:id", [md_auth.ensureAuth], updatePost); //actualiza y baja logica
router.get("/my/posts", [md_auth.ensureAuth], getMyPosts); //actualiza y baja logica
router.get("/other/posts/:id",getOtherPosts ); //actualiza y baja logica
router.get("/my/favorites", [md_auth.ensureAuth], getMyFavorites); //actualiza y baja logica

module.exports = router;
