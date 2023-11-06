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
        const { email, password, name, street, housenumber, zipcode } = request.body;

        if( !email ) {
            return response.status(400).json({ error: 'Missin email' })
         }
        
        const encryptedPassword = await createPasswordHash(password)

         const account = new Account({
            _id: uuid(),
            email,
            password: encryptedPassword,
            name,
            street,
            housenumber,
            zipcode,
         })

         try{
            await account.save();

            return response.status(201).json({ message: 'Account added succesfully!' });
         }catch(err){
            response.status(500).json({ error: err.message });
         }
    }

    
    async function updating(request, response){
         const { email, street, housenumber, zipcode } = request.body;

        if(!email) {
            return response.status(400).json({ error: 'You must inform a email' });
        }
    
        if(email) response.account.email = email; 
        if(street) response.account.street = street;
        if(housenumber) response.account.housenumber = housenumber;
        if(zipcode) response.account.zipcode = zipcode;
        
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