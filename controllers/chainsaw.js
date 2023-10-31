const productService = require("../services/products/products");

exports.getAllChainsaws = (req, res) => {
  res.send("GET ALL chainsaw");
};
exports.getAllChainsawById = (req, res) => {
  const myChainsaw = {
    name: "Super Chainsaw X9200",
    price: 19990,
  };
  res.send({
    requehoststed_url: `http://localhost:3000/chainsaw/${req.params.id}`,
    requested_method: "GET",
    chainsaw: myChainsaw,
  });
};
exports.postAllChainsaw = (req, res) => {
  const mojeChainsaw = {
    name: req.body.name,
    Price: req.body.price,
  };

  res.send({
    requehoststed_url: `http://localhost:3000/chainsaw/${req.params.id}`,
    requested_method: "GET",
    created_chainsaw: {
      url: `http://localhost3000/chainsaw/6`,
      mojeChainsaw
    },
  });
};
exports.putAllChainsaw = (req, res) => {
  const myChainsaw = {
    name: req.body.name,
    price: req.body.price,
  };
    res.send({
    _id: req.params.id,
    requehoststed_url: `http://localhost:3000/chainsaw/${req.params.id}`,
    requested_method: "PUT",
    chainsaw: myChainsaw,
url: `http://localhost3000/chainsaw/${req.params.id}`,
  });
};
exports.patchAllChainsaw = (req, res) => {
  const update = {}
  for (let ops of req.body) {
  update[ops.propsName] = ops.propsValue;
  }
  res.send({
    requehoststed_url: `http://localhost:3000/chainsaw/${req.params.id}`,
    requested_method: "PATCH",
    update,
url: `http://localhost3000/chainsaw/${req.params.id}`,
  });

};
exports.deleteAllChainsaw = (req, res) => {
  res.send(`Delete all chainsaw`);
};
exports.deleteAllChainsawbyId = (req, res) => {
  res.send(`Deleted chainsaw:  ${req.params.id}`);
};
