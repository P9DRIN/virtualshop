import { validate as isUuid } from 'uuid'

import Account from '../models/accounts.js'

    async function validatingId(request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({ error:"Invalid ID" });
        }
        try{
            const account = await Account.findById(id);
            response.account = account;
            if(!account){
                return response.status(404).json({ error: 'account not found!' })
            }
        }catch(err){
            return response.status(500).json({ error: err.message });
        }

        next();
    }

    export {
        validatingId,
    }