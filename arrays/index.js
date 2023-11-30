// Declaração de Arrays
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Maçã", "Banana", "Morango"];

// Acessando elementos de um Array
console.log(numeros[2]);
console.log(frutas[2]);

// Modificar elementos de um Array
frutas[0] = "Pêra";

// Adicionando e removendo elementos
frutas.push("Maça");
console.log(frutas);
frutas.pop();
console.log(frutas);

// Iterando sobre Arrays
for (const fruta of frutas) {
  console.log("Fruta Atual" + " " + fruta);
}

frutas.forEach((fruta) => console.log(`Fruta atual no forEach ${fruta}`));
