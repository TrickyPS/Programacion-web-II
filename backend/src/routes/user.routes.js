const {Router} = require("express")
const {getAll,getOne,deleteOne,update, getUserById} = require("./../controllers/user.controller");
const md_auth = require("../middlewares/auth");


const router = Router();

router.get("/",getAll);
router.get("/:id",[md_auth.ensureAuth],getOne);
router.get("/get/user/:id",getUserById);
router.delete("/:id",[md_auth.ensureAuth],deleteOne);
router.put("/:id",[md_auth.ensureAuth],update)



module.exports = router;