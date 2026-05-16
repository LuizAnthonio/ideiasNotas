const Ideia = require("../models/Ideia")
const express = require("express")
const app = express()


const criar = async (req,res) => {

    try{

        const { titulo, descricao } = req.body;
        
        console.log( titulo, descricao)
        const ideiaSerSalva = new Ideia({
            titulo, descricao
        })
        
        const salvarIdeia = await ideiaSerSalva.save()

    
        res.status(200).json("Ok")

    }catch(err){
        

        res.status(501).json({erro: String(err)})
        
    }
    
    
}

const mostra = async (req,res) => {
    
    try{
        const ideiaDb = await Ideia.find()
        
        res.status(201).json(ideiaDb)
        
    }catch(err){
        res.status(501).json({erro: String(err)})
        
    }
    
    
    
}

const excluir = async (req,res) => {
    
    try{
        
        const id = req.params.id;
        
        const ideias = await Ideia.deleteOne({_id:id})

        res.status(201).json(ideias)

    }catch(err){
        res.status(501).json({erro: String(err)})
        
    }
    
    
    
    
}

const update = async (req,res) => {
    try{

        const id = req.params.id;

        const { titulo, descricao } = req.body;
        
        const ideias = await Ideia.findByIdAndUpdate(id,{ titulo, descricao }, {new:true})
        
        res.status(201).json(ideias)
        
        
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
