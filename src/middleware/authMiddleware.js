const jwt = require('jsonwebtoken');

// Troque por uma palavra secreta sua ou use process.env.JWT_SECRET
const JWT_SECRET = 'benehime'; 

function verificarJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Pega o token após o 'Bearer '

    if (!token) {
        return res.status(401).json({ auth: false, message: 'Acesso negado. Token não fornecido.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ auth: false, message: 'Token inválido ou expirado.' });
        }

        // Adiciona os dados decodificados do usuário na requisição
        req.user = decoded; 
        
        // Vai para o controller
        next(); 
    });
}

module.exports = verificarJWT;