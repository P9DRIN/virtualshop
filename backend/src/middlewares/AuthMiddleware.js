import { promisify } from 'util';
import jwt from 'jsonwebtoken'

import AuthConfig from '../config/auth.js'
import * as dotenv from 'dotenv'

dotenv.config()
const SECRET = process.env.APP_SECRET


        async function authMiddleware(req, res, next){

        const authHeader = req.headers.authorization;
        
        if(!authHeader){
            return res.status(401).json({ error: 'Token was not provided' })
        }
        
        const [, token] = authHeader.split(' ');
        
        try{
            const decoded = await promisify(jwt.verify)(token, SECRET);
            req.userId = decoded.id;
            
            return next();
            
        }catch(err){
            return res.status(401).json({ error: "invalid token" })
        }
        
    }
    
export {
    authMiddleware,
}
    

