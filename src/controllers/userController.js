const User = require("../models/User")
const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const JWT_SECRET = 'benehime'


const login = async (req,res) => {
    try{

        const {user, senha} = req.body;

        const usuarioEncontrado = await User.findOne({ user: user });

        if (!usuarioEncontrado) {
            return res.status(401).json({ erro: "Usuário não encontrado" });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);

        if (!senhaCorreta) {

            return res.status(401).json({ erro: "Usuário ou senha incorretos" });
        }

        const token = jwt.sign(
            { 
                id: usuarioEncontrado._id, 
                nivel: usuarioEncontrado.nivel 
            }, 
            JWT_SECRET, 
            { expiresIn: '1h' } // Token expira em 1 hora
        );

        
        return res.status(200).json({ status: "Ok", token: token });




    }catch(err){

        return res.status(501).json({ erro: "Erro ao tentar fazer login", descricaoErro: String(err) });

    }
}



const criar = async (req,res) => {

    try{

        const { nome, user, email, senha, nivel } = req.body;

        const salt = await bcrypt.genSalt(10);

        const senhaCriptografada = await bcrypt.hash(senha, salt);

        
        //console.log( nome, user, email, senha, nivel)
        const userSerCriado = new User({
            nome, user, email, senha: senhaCriptografada, nivel
        })
        
        const salvarUser = await userSerCriado.save()

    
        res.status(200).json({status:"Ok", data:salvarUser})

    }catch(err){
        

        res.status(501).json({erro:"Erro ao cadastrar o Usuario",descricaoErro: String(err)})
        
    }
    
    
}

const mostra = async (req,res) => {
    
    try{
        const userDb = await User.find()
        
        res.status(201).json(userDb)
        
    }catch(err){
         res.status(501).json({erro:"Erro ao puxar os usuarios cadastrados",descricaoErro: String(err)})
        
    }
    
    
    
}

const excluir = async (req,res) => {
    
    try{
        
        const id = req.params.id;
        
        const user = await User.deleteOne({_id:id})

        res.status(201).json(user)

    }catch(err){
         res.status(501).json({erro:"Erro ao excluir o Usuario",descricaoErro: String(err)})
        
    }
    
    
    
    
}

const update = async (req,res) => {
    try{

        const id = req.params.id;

        const { nome, user, email, senha, nivel } = req.body;
        
        const users = await User.findByIdAndUpdate(id,{ nome, user, email, senha, nivel }, {new:true})
        
        res.status(201).json(users)
        
        
    }catch(err){
         res.status(501).json({erro:"Erro ao editar dados do Usuario",descricaoErro: String(err)})
        
    }
}


module.exports = {
    criar,
    mostra,
    excluir,
    update,
    login
}
