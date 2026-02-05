import AuthService from "../services/authServices.js";

export async function login(req, res, next) {
  try {
    const result = await AuthService.login(req.body);

    res.status(201).json({
      success: true,
      message: result.message || "User login successfully",
      user: result.user,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function register(req, res, next) {
  try {
    const result = await AuthService.register(req.body);

    res.status(201).json({
      success: true,
      message: result.message || "User registered successfully",
      user: result.user,
    });
  } catch (error) {
    console.log(error);
  }
}
