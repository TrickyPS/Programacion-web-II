const {Router} = require("express")

const router = Router();

router.post("/add",newComment)
router.get("/:id",getComments)
router.put("/delete/:id",deleteComment) //baja logica
router.delete("/:id",deleteComment)// eliminado completo  // David no lo agregues estamos pensando si lo agregamos o no
module.exports = router;