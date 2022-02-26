const {Router} = require("express")

const router = Router();

router.get("/:id",getUserNotifications) // obtiene las notificaciones del usuario,id de usuario
router.post("/:id",postUserNotifications)// agrega una notificacion a usuario,id de usuario
module.exports = router;