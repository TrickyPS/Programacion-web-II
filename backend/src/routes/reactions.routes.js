const {Router} = require("express")
const {newReaction,updateReaction} = require("./../controllers/reactions.controller")

const router = Router();

router.post("/",newReaction)
router.put("/:id",updateReaction)

module.exports = router;