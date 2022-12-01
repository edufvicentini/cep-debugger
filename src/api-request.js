const axios = require('axios')

exports.getFullAddressFromApi = async function(req, res) { 
    const { cep } = req.body;
    
    const fetchedData = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res)
        .catch(e => res.send(e.message))

    // Na linha abaixo você deve colocar o BreakPoint e ler o que existe dentro de fetchedData e montar o fullAdress
    const fullAdress = ''
    
    return res.json({endereco: fullAdress})
}