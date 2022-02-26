const {Router} = require("express")
const {getAll,signUp,logIn,getOne,deleteOne,update} = require("./../controllers/user.controller")


const router = Router();

router.get("/",getAll);
router.post("/",signUp);
router.post("/login",logIn);
router.get("/:id",getOne);
router.delete("/:id",deleteOne);
router.put("/:id",update)



module.exports = router;