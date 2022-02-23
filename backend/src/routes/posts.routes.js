const {Router} = require("express")

const router = Router();

router.post("/",addPost)
router.get("/:id",getPost)
router.get("/",getAllPosts)
router.put("/delete/:id",deletePost) //baja logica
router.delete("/:id",deleteP)// eliminado completo
router.put("/update/:id",updatePost)
module.exports = router;