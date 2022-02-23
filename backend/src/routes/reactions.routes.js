const {Router} = require("express")

const router = Router();

router.post("/",newReaction)
router.put("/",updateReaction)

module.exports = router;