var express = require('express');
var router = express.Router();
const catsController = require("../controllers/cats")
/* GET users listing. */
router.get('/', catsController.getAllCats);
router.get('/:id', catsController.getAllCatsById);

router.post('/', catsController.createCat);

router.put('/:id', catsController.updateCat);


router.patch('/:id',catsController.patchCat);


router.delete('/:id', catsController.deleteCat);

module.exports = router;
