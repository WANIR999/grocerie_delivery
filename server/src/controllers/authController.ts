import UserService from "../services/userService";
import { Router, Request, Response, NextFunction } from 'express';
import Controller from "../interfaces/controllerInterface";
import HttpException from "../utils/httpexeptions";

class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private UserService = new UserService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}/register`,
            this.register
        );
        this.router.post(
            `${this.path}/login`,
            this.login
        );
    }

    private register = async ( req: Request,res: Response,next: NextFunction): Promise<Response | void> => 
    {
        try {
            const { name, email, password , role} = req.body;

            const token = await this.UserService.register(
                name,
                email,
                password,
                role,
            );

            res.status(201).json({ token });
        } catch (error:any) {
            next(new HttpException(400, error.message));
        }
    };


    private login = async (req: Request,res: Response,next: NextFunction): Promise<Response | void> => 
    {
        try {
            const { email, password } = req.body;

            const token = await this.UserService.login(email, password);

            res.status(200).json({ token });
        } catch (error:any) {
            next(new HttpException(400, error.message));
        }
    };
   
}

export default UserController;
