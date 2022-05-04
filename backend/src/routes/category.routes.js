const {Router} = require("express");
const {addCategory, getAll, getOne, deleteOne, update} = require("./../controllers/category.controller");
const md_auth = require('../middlewares/auth');

const router = Router();
router.post("/", [md_auth.ensureAuth], addCategory);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/:id", [md_auth.ensureAuth], deleteOne);
router.put("/:id", [md_auth.ensureAuth], update);

module.exports = router;