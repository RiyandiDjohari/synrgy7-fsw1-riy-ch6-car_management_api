import { UsersModel } from "../../model/users.model";
import authRepository from "../../repository/superadmin/authRepository"

class SuperAdminAuthService {
    async login(username:string) {
        return authRepository.login(username)
    }

    async register(payload: UsersModel) {
        return authRepository.register(payload);
    }
}

export default new SuperAdminAuthService()