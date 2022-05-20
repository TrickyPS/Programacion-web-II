const {Router} = require("express")
const {getUserNotifications, postUserNotifications,seeNoti} = require("./../controllers/notifications.controller");
const md_auth = require('../middlewares/auth');

const router = Router();

router.get("/",[md_auth.ensureAuth],getUserNotifications) // obtiene las notificaciones del usuario,id de usuario
router.post("/",md_auth.ensureAuth,postUserNotifications)// agrega una notificacion a usuario,id de usuario
router.get("/see",md_auth.ensureAuth,seeNoti)
module.exports = router;