import jwt from 'jsonwebtoken'
import Account from '../models/accounts.js'
import * as dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'
import { createPasswordHash } from '../services/auth.js'

dotenv.config()

const SECRET = process.env.APP_SECRET


class SessionController{
    async create(req, res){
        const { email, password } = req.body
        
        const user = await Account.findOne({ email })
        
        const checkPassword = (user, password) => bcrypt.compareSync(password, user.password)

        if (!user){
            return res.status(401).json({ error:'user or password invalid' })
        }
        if (!checkPassword(user, password)){
            return res.status(401).json({ error: 'user or password invalid' })
        }

        const { _id } = user;

        return res.json({
            user: {
               _id,
                email
            },
            token: jwt.sign({ _id }, SECRET, { 
                expiresIn: '3d',
            })
        }
        )
    }

    
    
}

export default new SessionController();