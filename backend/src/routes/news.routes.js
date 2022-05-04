const {Router} = require("express")
const {addNews,getNews,getAllNews,updateNews,deleteNews} = require("./../controllers/news.controller")
const md_auth = require('../middlewares/auth');

const router = Router();

router.post("/",[md_auth.ensureAuth],addNews)
router.get("/:id",getNews)
router.get("/",getAllNews)
router.put("/:id",[md_auth.ensureAuth],updateNews)
router.delete("/:id",[md_auth.ensureAuth],deleteNews)// o baja logica

module.exports = router;