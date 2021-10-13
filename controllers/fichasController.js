const dados = require("../data/dados")
const saveData = require("../utils/saveData")
const campos = require("../campos")
const fs = require('fs');
const dir = './files';

module.exports = {
    async F1(req, res){
        res.render('F1');
    },  
   async save(req, res, next){
        /* adicionando objeto criado dentro do array dados */
        fs.readdir(dir, (err, files) => {
            console.log(files.length);
            });
        dados.push(campos);   
        /* executando funcao que salva alteracoes dos registros no arquivo dados.js */
        saveData(dados, 'dados.js');


    
        res.redirect('/ficha_alimentacao-refeicao');
      },
}