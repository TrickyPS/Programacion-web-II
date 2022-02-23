const {Router} = require("express")

const router = Router();

router.post("/",newComment)
router.get("/:id",getComment) // obtiene tambien subcomentarios 
router.put("/delete/:id",deleteComment) //baja logica
router.delete("/:id",deleteComment)// eliminado completo  // David no lo agregues estamos pensando si lo agregamos o no
module.exports = router;