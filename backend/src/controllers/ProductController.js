import express from 'express'
import Products from '../models/products.js'
import { v4 as uuid } from 'uuid'


    async function index(request, response){
        try{
            const products = await Products.find();
            return response.status(200).json({ products })

        }catch(err){
            response.status(500).json({ error: err.message })
        }
    }

    async function store(request, response){
        const { name, price, photo } = request.body;
        
        if( !name ) {
            return response.status(400).json({ error: 'Missin name' })
         }

         const product = new Products({
            _id: uuid(),
            name,
            price,
            photo,
         })

         try{
            await product.save();

            return response.status(201).json({ message: 'Product added succesfully!' });
         }catch(err){
            response.status(500).json({ error: err.message });
         }
    }
    async function update(request, response){
        const { name, price, photo } = request.body;

        if(!name && !price && !photo) {
            return response.status(400).json({ error: 'You must inform a name, price or photo' });
        }

        if(name) response.product.name = name;
        if(price) response.product.price = price;
        if(photo) response.product.photo = photo;

        try{
            await response.product.save();
            return response.status(200).json({ message: 'Product updated successfully!'})
        }catch(err){
            response.status(500).json({ error: err.message })
        }

    }

    async function remove(request, response){
        try{
            await response.product.deleteOne();
            return response.status(200).json({ message:'product deleted sucessfully' })

        }catch(err){
            return response.status(500).json({ error: err.message })
        }
    }               

    export {
        index,
        store, 
        update, 
        remove,
    }