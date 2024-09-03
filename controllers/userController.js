import { registerUser } from '../services/userService.js';
import { userSchema } from '../validators/userValidator.js';
import { AppError } from '../errors.js';

export const registerUserController = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = userSchema.validate({ email, password });

  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }

  try {
    const newUser = registerUser(email, password);
    res.json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    next(err);
  }
};
