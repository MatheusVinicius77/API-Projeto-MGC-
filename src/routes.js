import { Router } from "express";

import { createTable,selectDepoimentos } from './Controler/Depoimento.js'

const router = Router();
router.get('/',(req,res)=>{
    res.json({
        statusCode:200,
        "msg": "Api Rodando"
    })
    
})

//Acesso a API com todos os depoimentos
router.get('/Depoimentos', selectDepoimentos)

export default router