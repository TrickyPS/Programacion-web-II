const {Router} = require("express");
const { deleteComment ,add,update} = require("../controllers/acomments.controller");
const md_auth = require('../middlewares/auth');

const router = Router();

//Estos Son Subcomentarios

//Para traer todos los subcomentarios se debe pedir un comentario en ./comments.routes.js
router.post("/",md_auth.ensureAuth,add)
router.delete("/:id",md_auth.ensureAuth,deleteComment)// eliminado completo 
router.put("/:id",md_auth.ensureAuth,update)

module.exports = router;