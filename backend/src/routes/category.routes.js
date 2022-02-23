const {Router} = require("express")
const router = Router();
router.post("/add",addCategory)
router.get("",allCategories)
module.exports = router;