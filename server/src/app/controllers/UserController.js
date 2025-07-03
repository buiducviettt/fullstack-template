const User = require('../models/User');
class UserController {
  async index(req, res) {
    const users = await User.find();
    res.json(users);
  }

  async create(req, res) {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  }
}
module.exports = new UserController();
