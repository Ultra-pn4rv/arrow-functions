/*
Questão 07: Escreva uma arrow function chamada contaLetras que recebe uma 
string como parâmetro e retorna um objeto contendo a contagem de cada letra 
presente na string.
*/

const contaLetras = x => {
    let obj = {}
    x.split("").forEach(letra =>{
        if (letra !== " "){
            obj[letra] = (obj[letra] || 0) + 1;
        }
    });
    return obj
}
console.log(contaLetras("Isabella"));