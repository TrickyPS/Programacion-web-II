const {Router} = require("express")
const {addFavorite,getOne,deleteOne} = require("./../controllers/favorite.controller")
const md_auth = require('../middlewares/auth');

const router = Router();

router.post("/",[md_auth.ensureAuth],addFavorite) //agrega post favorito a la tabla de  usuarios
// TODO: eliminar en la lista d eusuario
router.delete("/:id",[md_auth.ensureAuth],deleteOne);

module.exports = router;