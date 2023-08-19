import express from 'express'
import { v4 as uuid } from 'uuid'
import Account from '../models/accounts.js'
import { createPasswordHash } from '../services/auth.js';


    async function indexing(request, response){
        try{
            const account = await Account.find();
            return response.status(200).json({ account })

        }catch(err){
            response.status(500).json({ error: err.message })
        }
    }

    async function storing(request, response){
        const { email, password } = request.body;

        if( !email ) {
            return response.status(400).json({ error: 'Missin email' })
         }
        
        const encryptedPassword = await createPasswordHash(password)

         const account = new Account({
            _id: uuid(),
            email,
            password: encryptedPassword,
         })

         try{
            await account.save();

            return response.status(201).json({ message: 'Account added succesfully!' });
         }catch(err){
            response.status(500).json({ error: err.message });
         }
    }
    async function updating(request, response){
        const { email, password } = request.body;

        if(!email || !password) {
            return response.status(400).json({ error: 'You must inform a email or a password' });
        }

        const updatePasswordHash = await createPasswordHash(password);

        if(email) response.account.email = email;
        if(password) response.account.password = updatePasswordHash;
        
        try{
            await response.account.save();
            return response.status(200).json({ message: 'Account updated successfully!'})
        }catch(err){
            response.status(500).json({ error: err.message })
        }

    }

    async function removing(request, response){
        try{
            await response.account.deleteOne();
            return response.status(200).json({ message:'Account deleted sucessfully' })

        }catch(err){
            return response.status(500).json({ error: err.message })
        }
    }               


    export {
        indexing,
        storing,
        updating,
        removing,
    }