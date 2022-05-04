const {Router} = require("express")
const {getUserNotifications, postUserNotifications} = require("./../controllers/notifications.controller");
const md_auth = require('../middlewares/auth');

const router = Router();

router.get("/:id",[md_auth.ensureAuth],getUserNotifications) // obtiene las notificaciones del usuario,id de usuario
router.post("/:id",postUserNotifications)// agrega una notificacion a usuario,id de usuario
module.exports = router;