const {Router} = require("express")
const {newReaction,updateReaction} = require("./../controllers/reactions.controller")
const md_auth = require('../middlewares/auth');

const router = Router();

router.post("/",[md_auth.ensureAuth],newReaction);
router.put("/:id",[md_auth.ensureAuth],updateReaction);

module.exports = router;