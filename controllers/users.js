const User = require("../models/users");

exports.getAllUsers = async (req, res) => {
  // je asynchronní, budeme čekat, než dojde do databáze
  try {
    const result = await User.find().select("username email"); //method chaining, funkce za funkcí
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "User found!",
        result,
      });
    }
    res.status(404).send({
      msg: "Users were not found",
    });
  } catch (err) {
    res.status(500).send({
      msg: "Users were not found",
      err,
    });
  }
};
exports.getAllUserById = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "User found!",
        result,
      });
    }
  } catch (err) {
    res.status(500).send({
      msg: "User was not found",
      err,
    });
  }
};

exports.createUser = async (req, res) => {
  // asynchronní fce, čeká na uložení (await dole u user save, nějaký promise (slib))
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    const result = await user.save();
    if (result) {
      return res.status(201).send({
        msg: "User created",
        createdUser: {
          url: `http://localhost:3000/users/${result._id}`,
          result,
        },
      });
      // bylo by tu return ale v js můžu napsat nahoru před res
    }
    res.status(500).send({
      msg: "User was not created",
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not created",
      err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    };
    const result = await User.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(201).send({
        msg: "User updated",
        updatedUser: {
          url: `http://localhost:3000/users/${result._id}`,
          result,
        },
      });
      // bylo by tu return ale v js můžu napsat nahoru před res
    }
    res.status(500).send({
      msg: "User was not updated",
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not updated",
      err,
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const update = {};
    for (const ops of req.body) {
      // for OF ..
      update[ops.propName] = ops.value; // když do postmana napíšu x a y, tady bude x a y
    }
    const result = await User.findByIdAndUpdate(req.params.id, update); 
    if (result) {
      return res.status(200).send({
        msg: "User patched",
        url: `https://localhost:3000/users/${req.params.id}`
      })
    }
    res.status(500).send({
      msg: "User was not patched",
      err,
    })
  } catch (err) {
    res.status(500).send({
      msg: "User was not patched",
      err,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "User deleted",
      });
    }
    return res.status(500).send({
      msg: "User was not deleted",
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not deleted",
      err,
    });
  }
};
