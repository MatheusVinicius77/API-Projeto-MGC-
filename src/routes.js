import { response, Router } from "express";

import { createTable, selectDepoimentos, sectionDepoimentos, selectDepoimento } from './Controler/Depoimento.js'

const router = Router();
router.get('/', (req, res) => {
    res.json({
        statusCode: 200,
        "msg": "Api Rodando"
    })

})

//Acesso a API com todos os depoimentos
router.get('/Depoimentos', selectDepoimentos)
router.get('/Depoimentos/section/:offset?', sectionDepoimentos)
router.get('/Depoimento/:name?', selectDepoimento)
router.get('/terms', (req, res) => {
    return res.json({
        message: "Termos de Serviço",
    })
})
export default router