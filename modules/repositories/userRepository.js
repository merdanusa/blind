import User from "../../infra/models/User.js";

class UserRepository {
  async findByLogin(login) {
    return User.findOne({ login });
  }
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }
}

export default new UserRepository();
