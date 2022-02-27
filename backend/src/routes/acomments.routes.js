const {Router} = require("express");
const { deleteComment ,add,update} = require("../controllers/acomments.controller");

const router = Router();

//Estos Son Subcomentarios

//Para traer todos los subcomentarios se debe pedir un comentario en ./comments.routes.js
router.post("/",add)
router.delete("/:id",deleteComment)// eliminado completo 
router.put("/:id",update)

module.exports = router;