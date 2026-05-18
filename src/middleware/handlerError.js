const handleError = (req, res, err, next) => {

    
    console.log("ERRO CAPTURADO:", err.message);
    
    res.status(500).json({
        erro: "Deu ruim no servidor",
        detalhe: err.message
    });



}

module.exports = handleError