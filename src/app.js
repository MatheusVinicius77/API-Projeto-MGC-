import express from 'express'
import fs from 'fs'
import https from 'https'
import cors from 'cors'
import swaggerUI from "swagger-ui-express"
import swaggerDocs from "./swagger.json" assert {type: 'json'}

const app = express()
app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(cors())

import router from './routes.js'
import { assert } from 'console'
app.use(router);


app.listen(3000, () => console.log('Api Rodando'))
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log('Rodando em https'))