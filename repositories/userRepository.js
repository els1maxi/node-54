import { users } from '../storage.js';
import { randomUUID } from 'crypto';

export const createUser = (email, password) => {
  const userId = randomUUID();
  const newUser = { id: userId, email, password };
  users.push(newUser);
  return newUser;
};

export const findUserById = (userId) => users.find(user => user.id === userId);
