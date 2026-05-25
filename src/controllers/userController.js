const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.JWT_SECRET


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

        return res.status(500).json({ erro: "Erro ao tentar fazer login", descricaoErro: String(err) });

    }
}



const criar = async (req,res) => {

        const {senha,...dados} = req.body;

        const salt = await bcrypt.genSalt(10);
        const senhaCriptografada = await bcrypt.hash(senha, salt);

        const userSerCriado = new User({...dados,senha:senhaCriptografada})

        const salvarUser = await userSerCriado.save()
        
       res.status(201).json({status:"Ok", data:salvarUser})


}

const mostra = async (req,res) => {

        const userDb = await User.find()
        
        res.status(200).json(userDb)

}

const excluir = async (req,res) => {
        
        const id = req.params.id;
        
        const user = await User.deleteOne({_id:id})

        res.status(204).json(user)
    
}

const update = async (req,res) => {

        const id = req.params.id;
        
        const users = await User.findByIdAndUpdate(id,req.body, {new:true})
        
        res.status(200).json(users)

}


module.exports = {
    criar,
    mostra,
    excluir,
    update,
    login
}




