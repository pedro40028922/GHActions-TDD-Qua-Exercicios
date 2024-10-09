function fatorial(n) {
  // Torna string em número
  if (typeof n === "string") {
    n = Number(n);
  }
  // Se não for um número ou string de número, devolve o erro
  if (isNaN(n) || typeof n !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se for menor que 0, devolve o erro
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

function fibonacci(n) {
  if (typeof n === "string") {
    n = Number(n);
  }
  if (isNaN(n) || typeof n !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se o número for menor ou igual a zero, devolve o erro
  if (n <= 0) {
    throw new Error("Não existe fibonacci de número menor ou igual a zero");
  }
  // Se o número for 1 ou 2, retorna 1
  if (n === 1 || n === 2) {
    return 1;
  }
  // Equação de fibonacci
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ehPrimo(n) {
  if (typeof n === "string") {
    n = Number(n);
  }
  if (isNaN(n) || typeof n !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se o número for menor ou igual a 1, devolve erro
  if (n <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }
  // Se o número for menor ou igual a 3, retorna verdadeiro
  if (n <= 3) {
    return true;
  }
  // Se a divisão dos valores for 0, retorna falso
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  // Equação de primo
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo,
};
