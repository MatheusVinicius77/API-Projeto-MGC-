import { response } from "express";
import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Depoimentos (id INTEGER PRIMARY KEY, autor TEXT, status TEXT, texto TEXT, imagem TEXT) ')
    })
}

export async function selectDepoimentos(req,res){
    openDb().then(db=>{
        db.all('SELECT * FROM Depoimentos')
        .then(depoimento=>res.json(depoimento))
    })
}