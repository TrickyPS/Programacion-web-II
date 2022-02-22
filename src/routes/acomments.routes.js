const {Router} = require("express")

const router = Router();

router.post("/add",newaComment)
router.get("/:id",agetComments)
router.put("/delete/:id",adeleteComment) //baja logica
router.delete("/:id",adeleteComment)// eliminado completo  // David no lo agregues estamos pensando si lo agregamos o no
module.exports = router;