const express = require('express')
const {v4: uuid} = require('uuid');
const Account = require('../models/accounts');



module.exports = { 
    async index(request, response){
        try{
            const account = await Account.find();
            return response.status(200).json({ account })

        }catch(err){
            response.status(500).json({ error: err.message })
        }
    },

    async store(request, response){
        const { email, password } = request.body;
        
        if( !email ) {
            return response.status(400).json({ error: 'Missin email' })
         }

         const account = new Account({
            _id: uuid(),
            email,
            password,
         })

         try{
            await account.save();

            return response.status(201).json({ message: 'Account added succesfully!' });
         }catch(err){
            response.status(500).json({ error: err.message });
         }
    },
    async update(request, response){
        const { email, password } = request.body;

        if(!email && !password) {
            return response.status(400).json({ error: 'You must inform a email or a password' });
        }

        if(email) response.account.email = email;
        if(password) response.account.password = password;
        
        try{
            await response.account.save();
            return response.status(200).json({ message: 'Account updated successfully!'})
        }catch(err){
            response.status(500).json({ error: err.message })
        }

    },

    async delete(request, response){
        try{
            await response.account.deleteOne();
            return response.status(200).json({ message:'Account deleted sucessfully' })

        }catch(err){
            return response.status(500).json({ error: err.message })
        }
    }               
};