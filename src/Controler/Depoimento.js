import { response } from "express";
import { openDb } from "../configDB.js";

// ESSA CONSTANTE É A QUANTIDADES DE DEPOIMENTOS QUE IRÁ APARECER NA PÁGINA
const LIMIT = 3

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

export async function sectionDepoimentos(req,res){
    // OFFSET É A QUANTIDADE DE DEPOIMENTOS QUE EU IREI PULAR
    let {offset} = req.params
    offset = Number(offset)
    if(!offset){
        offset = 0
    }
    openDb().then(db=>{
        db.all("SELECT * FROM Depoimentos LIMIT " + `${offset},${LIMIT}`)
        .then(depoimento=>res.json(depoimento))
    })
}

export async function selectDepoimento(req,res){
    let id = req.params.id
    openDb().then(db=>{
        db.get("SELECT * FROM Depoimentos WHERE id=?", [id])
        .then(depoimento=>res.json(depoimento))
    })
}