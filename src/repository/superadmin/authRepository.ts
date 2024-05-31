import { UsersModel } from "../../model/users.model";

class SuperAdminAuthRepository {
  async login(username: string) {
    return UsersModel.query().findOne({ username });
  }

  async register(item: UsersModel) {
    return UsersModel.query().insert(item);
  }
}

export default new SuperAdminAuthRepository();
