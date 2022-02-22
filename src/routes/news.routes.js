const {Router} = require("express")

const router = Router();

router.post("/add",addNews)
router.get("/:id",getNews)
router.get("/",getallNews)
router.put("/update/:id",updateNews)
module.exports = router;