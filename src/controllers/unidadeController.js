const Unidade = require("../models/Unidade")
const express = require("express")
const app = express()


const criar = async (req,res) => {

    try{

        const { nome, tipo } = req.body;
        
        console.log( nome, tipo )
        const UnidadeSerSalva = new Unidade({
            nome, tipo
        })
        
        const salvarUnidade = await UnidadeSerSalva.save()

    
        res.status(200).json("Ok")

    }catch(err){
        

        res.status(501).json({erro: String(err)})
        
    }
    
    
}

const mostra = async (req,res) => {
    
    try{
        const UnidadeDb = await Unidade.find()
        
        res.status(201).json(UnidadeDb)
        
    }catch(err){
        res.status(501).json({erro: String(err)})
        
    }
    
    
    
}

const excluir = async (req,res) => {
    
    try{
        
        const id = req.params.id;
        
        const Unidades = await Unidade.deleteOne({_id:id})

        res.status(201).json(Unidades)

    }catch(err){
        res.status(501).json({erro: String(err)})
        
    }
    
    
    
    
}

const update = async (req,res) => {
    try{

        const id = req.params.id;

        const { nome, tipo } = req.body;
        
        const Unidades = await Unidade.findByIdAndUpdate(id,{ nome, tipo }, {new:true})
        
        res.status(201).json(Unidades)
        
        
    }catch(err){
        res.status(501).json({erro: String(err)})
        
    }
}


module.exports = {
    criar,
    mostra,
    excluir,
    update
}
