const {Router} = require("express")

const router = Router();

router.post("/",addNews)
router.get("/:id",getNews)
router.get("/",getAllNews)
router.put("/:id",updateNews)
router.delete("/:id",deleteNews)// o baja logica

module.exports = router;