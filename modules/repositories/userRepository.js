import { User } from "../../infra/models/User";

export default class UserRepository {
  async findByLogin(login) {
    return User.findOne({ login });
  }
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }
}
