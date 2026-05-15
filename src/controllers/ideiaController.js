const Ideia = require("../models/Ideia.js")
const express = require("express")
const app = express()


const criar = async (req,res) => {


    const aIdeia = {title:"Ideia 1", descricao:"descrevo"}

    const sav = new Ideia(aIdeia)

    const salvaideia = await sav.save()

    res.status(200).json(aIdeia)


}

const mostra = async (req,res) => {
    res.send("aqui ó")
}


module.exports = {
    criar,
    mostra
}