const {Router} = require("express")
const {addFavorite,getOne,deleteOne} = require("./../controllers/favorite.controller")

const router = Router();

router.post("/",addFavorite) //agrega post favorito a la tabla de  usuarios
// TODO: eliminar en la lista d eusuario
router.delete("/:id",deleteOne);

module.exports = router;