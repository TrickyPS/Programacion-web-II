const {Router} = require("express")

const router = Router();
//es el mismo add o pondria un update.
router.post("/add",newReaction)
router.get("/:id",getReaction)
module.exports = router;