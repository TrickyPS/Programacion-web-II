const {Router} = require("express")

const router = Router();

router.post("/",addRed) 
router.put("/id",putRed) 
router.delete("/:id",deleteRed)



module.exports = router;