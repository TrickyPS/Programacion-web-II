const {Router} = require("express")
const {posts,bestReactions,topic,rank} = require("./../controllers/reports.controller");
const md_auth = require('../middlewares/auth');

const router = Router();

router.get("/bestReactions",md_auth.ensureAuth,bestReactions);
router.get("/posts",md_auth.ensureAuth,posts);
router.get("/rank",md_auth.ensureAuth,rank);
router.get("/topic",md_auth.ensureAuth,topic);

module.exports = router;