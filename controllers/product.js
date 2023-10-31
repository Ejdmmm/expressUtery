exports.getAllProducts = (req, res) => {
  // arrow funkce misto function
  res.send("GET ALL PRODUCTS");
};
exports.getProductById = (req, res) => {
  // arrow funkce misto function
  res.send(`Product: ${req.params.id}`);
};
exports.createProduct = (req, res) => {
  // arrow funkce misto function
  res.send("Posted product");
};
exports.updatedProduct = (req, res) => {
  // arrow funkce misto function
  res.send(`Updated product: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
};
exports.patchedProduct = (req, res) => {
  // arrow funkce misto function
  res.send(`Patched product: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
};
exports.deleteProduct = (req, res) => {
  // arrow funkce misto function
  res.send(`Deleted product: ${req.params.id}`); // vezme parametry fce kterou jsem napsal na get( zde mam id)
};
