const {Router} = require("express")

const router = Router();

router.post("/add",addPost)
router.get("/:id",getPost)
router.get("/",getPublications)



module.exports = router;