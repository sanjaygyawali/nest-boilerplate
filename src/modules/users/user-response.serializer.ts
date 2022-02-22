import { User } from './entity/user.entity';

const userResponseSerializer = (user: User) => {
  delete user.password;
  delete user.hash;
  delete user.__entity;
};

export default userResponseSerializer;
