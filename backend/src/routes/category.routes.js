const {Router} = require("express");
const {addCategory, getAll, getOne, deleteOne, update} = require("./../controllers/category.controller");

const router = Router();
router.post("/add", addCategory);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/:id", deleteOne);
router.put("/:id", update);

module.exports = router;