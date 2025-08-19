import express from 'express'

import { getAllOrders } from '../services/orderService.js'



const router = express.Router()


router.get('/', async(req, res) => {

    try{
        const findOrders =await  getAllOrders();
        
        return res.status(200).json(findOrders);

    }catch(err){
        console.log(err)
    }
})

export default router;

