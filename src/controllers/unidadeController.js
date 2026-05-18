const Unidade = require("../models/Unidade")


const criar = async (req,res) => {

        const UnidadeSerSalva = new Unidade(req.body)
        
        const salvarUnidade = await UnidadeSerSalva.save()

        res.status(201).json("Ok")

}

const mostra = async (req,res) => {

        const UnidadeDb = await Unidade.find()
        
        res.status(200).json(UnidadeDb)

}

const excluir = async (req,res) => {
        
        const id = req.params.id;
        
        const Unidades = await Unidade.deleteOne({_id:id})

        res.status(204).json(Unidades)
    
}

const update = async (req,res) => {

        const id = req.params.id;
        
        const Unidades = await Unidade.findByIdAndUpdate(id,req.body, {new:true})
        
        res.status(200).json(Unidades)

}


module.exports = {
    criar,
    mostra,
    excluir,
    update
}
