const {Router} = require("express")

const router = Router();

router.post("/",addFavorite) //agrega post favorito a la tabla de  usuarios
router.get("/:id",getAll) // id de usuario para obtener todos los favoritos

//DEJA ESTE PENDIENTE
router.delete("/:post/:user",deleteFavorite)// eliminado completo  

module.exports = router;