const {Router} = require("express")

const router = Router();

//Estos Son Subcomentarios

//Para traer todos los subcomentarios se debe pedir un comentario en ./comments.routes.js
router.post("/add",newaComment)
router.delete("/:id",adeleteComment)// eliminado completo 

module.exports = router;