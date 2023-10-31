
const express = require('express');
const router = express.Router();

const chainsawController = require("../controllers/chainsaw")
/**
 * Get all chainsaw
 * URL: localhost:3000/chainsaw
 * Method: GET
 */
router.get('/', chainsawController.getAllChainsaws);
/**
 * Get book by id
 * URL: localhost3000/chainsaw/:id
 * Method: GET
 */
router.get('/:id', chainsawController.getAllChainsawById);
/**
 * Create chainsaw
 * URL: localhost:3000/chainsaw
 * Method: POST
 */
router.post("/", chainsawController.postAllChainsaw);
/**
 * Patch (update a small part) book
 * URL: localhost:3000/chainsaw/:id
 * Method: PATCH
 */
router.patch("/:id", chainsawController.patchAllChainsaw);

/**
 * Put (whole data)
 * URL: localhost:3000/chainsaw/:id
 * Method: PUT
 */
router.put("/",  chainsawController.putAllChainsaw);

/**
 * Delete books
 * URL: localhost:3000/chainsaw
 * Method: DELETE
 */
router.delete("/",chainsawController.deleteAllChainsaw);
/**
 * Delete books by id
 * URL: localhost:3000/chainsaw/:id
 * Method: DELETE
 */
router.delete("/:id", chainsawController.getAllChainsawById);
module.exports = router;
