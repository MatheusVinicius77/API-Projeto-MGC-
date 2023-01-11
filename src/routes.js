import { Router } from "express";


const router = Router();
router.get('/',(req,res)=>{
    res.json({
        statusCode:200,
        "msg": "Api Rodando"
    })
})



export default router