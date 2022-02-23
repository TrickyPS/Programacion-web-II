const {Router} = require("express")
const {getAll,logUp,logIn,getOne,deleteOne,update} = require("./../controllers/user.controller")


const router = Router();

router.get("/",getAll);
router.post("/",logUp);
router.post("/login",logIn);
router.get("/:id",getOne);
router.delete("/:id",deleteOne);
router.put("/:id",update)



module.exports = router;