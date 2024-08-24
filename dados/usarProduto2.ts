const fs = require('fs');

let prod1 = null;
try{
    let prodStr = fs.readFileSync('prod1.json');
    prod1 = JSON.parse(prodStr);
} catch (err){
    prod1 = {codigo: 1, nome: 'Teclado', quantidade: 50};
    let prodStr = JSON.stringify(prod1);
    fs.writeFileSync('prod1.json', prodStr);
}
