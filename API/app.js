import { createRequire } from 'module';
const require = createRequire(import.meta.url);

codigo1 = require('../Layout/script.js');

objeto.name = "test";

console.log(objeto);

const soap = require('soap')

const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl'

soap.createClient(url, (err, client) => {

    if(err){
        console.log(err)
    }else{
        client.CalcPrecoPrazo({
            nCdServico: '04510',
            sCepOrigem: '45000000',
            sCepDestino: '45051030',
            nVlPeso: '10.500',
            nCdFormato: 1,
            nVlComprimento: 8,
            nVlAltura: 15,
            nVlLargura: 15,
            nVlDiametro: 0,
            sCdMaoPropria: 'N',
            sCdAvisoRecebimento: 'N'
        }, (err, resp) => {
            if(err){
                console.log(err)
            }else{
                console.log(resp.CalcPrecoPrazoResult.Servicos)
            }
            
        })
    }

})
