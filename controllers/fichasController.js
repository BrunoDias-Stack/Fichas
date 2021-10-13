const dados = require("../data/dados")
const saveData = require("../utils/saveData")
const campos = require("../campos")

module.exports = {
    async F1(req, res){
        res.render('F1')
        // console.log(req.body)
    },
   async save(req, res, next){
        /* criando um id sequencial, obtendo a
        quantidade de elementos no array dados e somando + 1 */

        //let id = dados.length + 1;
        
        
        /* montando objeto para seguir padrao dentro do arquivo data/dados.js */
        //let dado = {campos, ...req.body };
        
        /* adcionando objeto criado dentro do array recipes */
        dados.push(campos);   
    
        // executando funcao que salva alteracoes dos registros no arquivo dados.js
        saveData(dados, 'dados.js');
    
        res.redirect('/ficha_alimentacao-refeicao');
      },
}