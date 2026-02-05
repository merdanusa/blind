import UserRepository from "../repositories/userRepository.js";

class AuthService {
  async login(data) {
    const { login, password } = data;

    const user = await UserRepository.findByLogin(login);

    if (!user) {
      throw new Error("Invalid login or password");
    }

    if (user.password !== password) {
      throw new Error("Invalid login or password");
    }

    return {
      message: "User login successfully",
      user,
    };
  }

  async register(data) {
    const { login, password } = data;

    const user = await UserRepository.create({ login, password });

    return {
      message: "User registered successfully",
      user,
    };
  }
}

export default new AuthService();
