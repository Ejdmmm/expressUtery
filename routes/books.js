const express = require('express');
const router = express.Router();

/**
 * Get all books
 * URL: localhost:3000/books
 * Method: GET
 */
router.get('/', function(req, res, next) {
    res.send("GET ALL BOOKS")
  });
/**
 * Get book by id
 * URL: localhost3000/books/:id
 * Method: GET
 */
router.get('/:id', (req, res) => {
    res.send(`Book: ${req.params.id}`)
  });
/**
 * Create book
 * URL: localhost:3000/books
 * Method: POST
 */
router.post("/", (req, res) => {
    res.send("Vytvarim knizku")
});
/**
 * Patch (update a small part) book
 * URL: localhost:3000/books/:id
 * Method: PATCH
 */
router.patch("/:id", (req, res) => {
    res.send(`Patched book: ${req.params.id}`)
});

/**
 * Put (whole data)
 * URL: localhost:3000/books/:id
 * Method: PUT
 */
router.put("/:id",  (req, res) => {
    res.send (`Updated book: ${req.params.id}`)
});

/**
 * Delete books
 * URL: localhost:3000/books
 * Method: DELETE
 */
router.delete("/", (req, res ) => {
    res.send(`Delete all books`)
})
/**
 * Delete books by id
 * URL: localhost:3000/books/:id
 * Method: DELETE
 */
router.delete("/:id", (req, res ) => {
    res.send(`Deleted books: ${req.params.id} `)
})
module.exports = router;
