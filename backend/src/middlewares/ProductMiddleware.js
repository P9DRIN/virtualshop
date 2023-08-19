import { validate as isUuid } from 'uuid'
import Product from '../models/products.js'


    async function validateId(request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({ error:"Invalid ID" });
        }
        try{
            const product = await Product.findById(id);
            response.product = product;
            if(!product){
                return response.status(404).json({ error: 'product not found!' })
            }
        }catch(err){
            return response.status(500).json({ error: err.message });
        }

        next();
    }

    export {
        validateId,
    }