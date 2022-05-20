const {Router} = require("express")
const {newComment, getComment,addStar, deleteComment,updateComment} = require("./../controllers/comments.controller");
const md_auth = require('../middlewares/auth');

const router = Router();

router.post("/",[md_auth.ensureAuth],newComment)
router.post("/star",[md_auth.ensureAuth],addStar) // Agrega estrella 
router.get("/:id",getComment) // obtiene tambien subcomentarios 
router.put("/:id",[md_auth.ensureAuth],updateComment) 
router.delete("/:id",[md_auth.ensureAuth],deleteComment)// eliminado completo  // David no lo agregues estamos pensando si lo agregamos o no

module.exports = router;