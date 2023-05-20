import { generateToken, isValidPassword } from "../helpers/jwtValidate.js";
import ILogin from "../interface/ILogin.js";
import UserManager from "./userManager.js";

class SessionManager {
    constructor() { }

    async login(body: ILogin) {
        try {

            const { email, password } = body;
            const manager = new UserManager();
            const user = await manager.userValidate(email);

            const isHashedPassword = await isValidPassword(password, user.password);
            if (!isHashedPassword) {
                throw new Error("Login failed, invalid password.");
            }

            const accessToken = await generateToken(user);

            return accessToken;
        } catch (error) {
            throw error;
        }
    }
}

export default SessionManager;