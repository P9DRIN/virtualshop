const { validate: isUuid } = require('uuid');

const Product = require('../models/products');

module.exports = {
    async validateId(request, response, next){
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
}