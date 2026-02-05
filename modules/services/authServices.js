import UserRepository from "../repositories/userRepository.js";

export default class AuthService {
  async login(data) {
    const { login, password } = data;

    let user = await UserRepository.findByLogin(login);

    const passwordMatch = await user.comparePassword(password.trim());

    if (!passwordMatch) {
      throw new Error("Invalid login or password");
    }

    return user;
  }
  async register(data) {
    const { login, password } = data;

    const user = await UserRepository.create({ login, password });

    return user;
  }
}
