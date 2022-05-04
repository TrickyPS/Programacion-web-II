const {Router} = require("express")
const {getAll,signUp,logIn,getOne,deleteOne,update} = require("./../controllers/user.controller");
const md_auth = require("../middlewares/auth");


const router = Router();

router.get("/",getAll);
router.post("/", signUp);
router.post("/login",logIn);
router.get("/:id",[md_auth.ensureAuth],getOne);
router.delete("/:id",[md_auth.ensureAuth],deleteOne);
router.put("/:id",[md_auth.ensureAuth],update)



module.exports = router;