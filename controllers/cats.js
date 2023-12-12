const Cat = require("../models/cats");

exports.getAllCats = async (req, res) => {
  // je asynchronní, budeme čekat, než dojde do databáze
  try {
    const result = await Cat.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Cats found!",
        result,
      });
    }
    res.status(404).send({
      msg: "Cats were not found",
    });
  } catch (err) {
    res.status(500).send({
      msg: "Cats were not found",
      err,
    });
  }
};
exports.getAllCatsById = async (req, res) => {
  try {
    const result = await Cat.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Cat found!",
        result,
      });
    }
  } catch (err) {
    res.status(500).send({
      msg: "Cat was not found",
      err,
    });
  }
};

exports.createCat = async (req, res) => {
  // asynchronní fce, čeká na uložení (await dole u user save, nějaký promise (slib))
  try {
    const cat = new Cat({
      name: req.body.name,
      type: req.body.type,
      height: req.body.height,
      weight: req.body.weight,
      color: req.body.color,
    });
    const result = await cat.save();
    if (result) {
      return res.status(201).send({
        msg: "Cat was born",
        createdPhone: {
          url: `http://localhost:3000/cats/${result._id}`,
          result,
        },
      });
      // bylo by tu return ale v js můžu napsat nahoru před res
    }
    res.status(500).send({
      msg: "Cat was not born",
    });
  } catch (err) {
    res.status(500).send({
      msg: "Cat was not born",
      err,
    });
  }
};

exports.updateCat = async (req, res) => {
  try {
    const update = {
      name: req.body.name,
      type: req.body.type,
      height: req.body.height,
      weight: req.body.weight
    };
    const result = await Cat.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "Cat updated",
        updatedUser: {
          url: `http://localhost:3000/cats/${result._id}`,
          result,
        },
      });
      // bylo by tu return ale v js můžu napsat nahoru před res
    }
    res.status(500).send({
      msg: "Cat was not born",
    });
  } catch (err) {
    res.status(500).send({
      msg: "Cat was not born",
      err,
    });
  }
};

exports.patchCat = async (req, res) => {
  try {
    const update = {};
    for (const ops of req.body) {
      // for OF ..
      update[ops.propName] = ops.value; // když do postmana napíšu x a y, tady bude x a y // do postmana se zapisuje v poli [ { a tady propsName a value = "jmeno"}]
    }
    const result = await Cat.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "Cat patched",
        url: `http://localhost:3000/cat/${req.params.id}`,
      });
    }
    res.status(500).send({
      msg: "Cat was not patched",
      err,
    });
  } catch (err) {
    res.status(500).send({
      msg: "Cat was not patched",
      err,
    });
  }
};
exports.deleteCat = async (req, res) => {
  try {
    const result = await Cat.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Cat deleted",
      });
    }
    return res.status(500).send({
      msg: "Cat was not deleted",
    });
  } catch (err) {
    res.status(500).send({
      msg: "Cat was not deleted",
      err,
    });
  }
};
