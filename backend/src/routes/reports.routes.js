const {Router} = require("express")
const {posts,bestReactions,topic,rank} = require("./../controllers/reports.controller");

const router = Router();

router.get("/bestReactions",bestReactions);
router.get("/posts",posts);
router.get("/rank",rank);
router.get("/topic",topic);

module.exports = router;