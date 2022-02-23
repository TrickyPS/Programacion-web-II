const {Router} = require("express")

const router = Router();

router.get("/:id",getuserNotifications) // obtiene las notificaciones del usuario,id de usuario
router.post("/:id",postuserNotifications)// agrega una notificacion a usuario,id de usuario
module.exports = router;