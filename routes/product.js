const express = require("express");
const router = express.Router();
const productController = require("../controllers/product"); // dostaneme zpatky kontorler

/**
 * CRUD --
 * Create - insert
 * Read - select
 * Update - Update
 * Delete - Delete
 */
/**
 * Get all products
 * URL: /product (predtim localhost:3000)
 * Method: GET
 */
router.get("/", productController.getAllProducts),
  /**
   * GET product by id
   * URL: /product/:id
   * Method: GET
   */

  router.get("/:id", productController.getProductById);
/**
 * Create product
 * URL: /product
 * Method: POST (Vytváříme)
 */
router.post("/", productController.createProduct);
/**
 * Update product
 * URL: /product/:id
 * Method: PUT (Aktualizuje cely produkt)
 */
router.put("/:id", productController.updatedProduct);
/**
 * Patched product
 * URL: /product/:id
 * Method: PATCH (Aktualizuje jen cast produktu)
 *
 */
router.patch("/:id", productController.patchedProduct); // vezme parametry fce kterou jsem napsal na get( zde mam id);
/**
 * Deleted product
 * URL: /product/:id
 * Method: DELETE
 */
router.delete("/:id", productController.deleteProduct);
module.exports = router;
