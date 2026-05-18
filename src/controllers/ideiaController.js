const Ideia = require("../models/Ideia")


const criar = async (req,res) => {

       // const { titulo, descricao, tipo, evolucao, modulo,link,unidade,tipoUnidade,status } = req.body;
        
        const ideiaSerSalva = new Ideia(req.body)
        
        const salvarIdeia = await ideiaSerSalva.save()

    
        res.status(201).json({status:"Ok", data:salvarIdeia})
    
    
}

const mostra = async (req,res) => {

        const ideiaDb = await Ideia.find()
        
        res.status(200).json(ideiaDb)
        
    
    
}

const excluir = async (req,res) => {
    
        
        const id = req.params.id;
        
        const ideias = await Ideia.deleteOne({_id:id})

        res.status(204).json(ideias)

    
}

const update = async (req,res) => {

        const id = req.params.id;

        //const { titulo, descricao, tipo, evolucao, modulo,link,unidade,tipoUnidade,status } = req.body;
        
        const ideias = await Ideia.findByIdAndUpdate(id, req.body, {new:true})
        
        res.status(200).json(ideias)
        
}


module.exports = {
    criar,
    mostra,
    excluir,
    update
}
