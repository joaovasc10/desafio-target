function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Exemplo de uso
const minhaString = "Desafio da Target!";
const stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
