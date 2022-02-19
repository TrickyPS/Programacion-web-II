const {Router} = require("express")
const {getAll,logUp,logIn,getOne} = require("./../controllers/user.controller")


const router = Router();

router.get("/",getAll);
router.post("/",logUp);
router.post("/login",logIn);
router.get("/:id",getOne);

module.exports = router;