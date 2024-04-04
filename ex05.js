function inverterString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso
const minhaString = "Desafio da Target!";
const stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
