import UserModel from '../models/userModel'
import token from '../utils/tokenActions'


class UserService{
    private user = UserModel;

    public async register(  name: string,email: string,password: string,role: string):Promise<object | Error>
    {
        try {
            const user = await this.user.create({
                name,
                email,
                password,
                role,
            });

            const accessToken = user;

            return accessToken;
        } catch (error:any) {
            throw new Error(error.message);
        }
    };

    public async login(email: string,password: string): Promise<string | Error> 
    {
        try {
            const user = await this.user.findOne({ email });

            if (!user) {
                throw new Error('Unable to find user with that email address');
            }

            if (await user.isValidPassword(password)) {
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}

export default UserService;