const {Router} = require("express")
const {bestComments,bestReactions,topic,rank} = require("./../controllers/reports.controller");

const router = Router();

router.get("/bestReactions",bestReactions);
router.get("/bestComments",bestComments);
router.get("/rank",rank);
router.get("/topic",topic);

module.exports = router;