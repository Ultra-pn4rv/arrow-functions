/*
Questão 08: Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela 
pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para 
a esquerda) e false caso contrário. 
*/

const ehPalindromo = (str) => {
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
    
    for (let i = 0; i < formattedStr.length / 2; i++) {
        if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
            return false;
        }
    }
  
    return true;
};
console.log(ehPalindromo("arara"));  
console.log(ehPalindromo("roma"));