const productService = require("../service/product/product")


exports.getAllChainsaws = (req, res) => {
    res.send("GET ALL chainsaw")
  };
exports.getAllChainsawById = (req, res) => {
    res.send(`chainsaw: ${req.params.id}`)};
exports.postAllChainsaw =  (req, res) => {
    let mojeChainsaw = {
        "name": "Pila",
        "Price" : 15000
        
    }
    productService.packProduct
    
    res.send(`Vytvarim motorovku`)
};
exports.putAllChainsaw = (req, res) => {
    res.send (`PUT chainsaw`)
};
exports.patchAllChainsaw = (req, res) => {
    res.send(`Patched chainsaw: ${req.params.id}`)
}
exports.deleteAllChainsaw = (req, res ) => {
    res.send(`Delete all chainsaw`)
};
exports.deleteAllChainsawbyId = (req, res ) => {
    res.send(`Deleted chainsaw:  ${req.params.id}`)
};