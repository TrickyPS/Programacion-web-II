const {Router} = require("express")
const {newComment, getComment,addStar, deleteComment,updateComment} = require("./../controllers/comments.controller");

const router = Router();

router.post("/",newComment)
router.post("/star",addStar) // Agrega estrella 
router.get("/:id",getComment) // obtiene tambien subcomentarios 
router.put("/:id",updateComment) 
router.delete("/:id",deleteComment)// eliminado completo  // David no lo agregues estamos pensando si lo agregamos o no

module.exports = router;