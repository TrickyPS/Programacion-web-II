const {Router} = require("express")

const router = Router();
//es el mismo add o pondria un update.
router.get("/:id",getuserNotifications)
router.post("/:id",postuserNotifications)
module.exports = router;