const {Router} = require("express")

const router = Router();

router.post("/add",addPost)
router.get("/:id",getPost)
router.get("/",getTotalposts)
router.put("/delete/:id",deletePost) //baja logica
router.delete("/:id",deleteP)// eliminado completo
router.put("/update/:id",updatePost)
router.post("/add",addImage)
module.exports = router;