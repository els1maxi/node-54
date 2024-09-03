import { createUser, findUserById } from '../repositories/userRepository.js';

export const registerUser = (email, password) => {
  const newUser = createUser(email, password);
  return newUser;
};

export const getUserById = (userId) => findUserById(userId);
