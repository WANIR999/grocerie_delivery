import { Request, Response, NextFunction } from 'express';
import token from '../utils/tokenActions';
import UserModel from '../models/userModel';
import Token from '../interfaces/tokenInterface';
import HttpException from '../utils/httpexeptions';
import jwt from 'jsonwebtoken';

async function authenticatedMiddleware(req: Request,res: Response,next: NextFunction): Promise<Response | void>
{
   
}

export default authenticatedMiddleware;