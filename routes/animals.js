const express = require('express');
const router = express.Router();
/**
 * Get all products
 * URL: /product (predtim localhost:3000)
 * Method: GET
 */

router.get('/',(req, res,) => {     // arrow funkce misto function 
 res.send("RETURN ANIMALS");
});
/**
* GET product by id
* URL: /product/:id
* Method: GET
*/

router.get('/:id',(req, res,) => {     // arrow funkce misto function 
   res.send(`Animals: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
 });

/**
 * Create product
 * URL: /product
 * Method: POST (Vytváříme)
 */
router.post('/',(req, res,) => {     // arrow funkce misto function 
   res.send("ANIMAL HAS BEEN BORN");
 });
 /**
 * Update product
 * URL: /product/:id
 * Method: PUT (Aktualizuje cely produkt)
 */
 router.put('/:id',(req, res,) => {     // arrow funkce misto function 
   res.send(`Animal is borning: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
 });
 /**
  * Patched product
  * URL: /product/:id
  * Method: PATCH (Aktualizuje jen cast produktu)
  *
  */
 router.patch('/:id',(req, res,) => {     // arrow funkce misto function 
   res.send(`ANGRY ANIMAL PATCH: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
 });
/**
* Deleted product
* URL: /product/:id
* Method: DELETE
*/
router.delete('/:id',(req, res,) => {     // arrow funkce misto function 
   res.send(`Deleted/Kiiled animal: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
 });
module.exports = router;
