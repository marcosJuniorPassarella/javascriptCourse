// Declaração de Arrays
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Maçã", "Banana", "Morango"];

// Acessando elementos de um Array
// console.log(numeros[2]);
// console.log(frutas[2]);

// Modificar elementos de um Array
frutas[0] = "Pêra";

// Adicionando e removendo elementos
frutas.push("Maça");
// console.log(frutas);
frutas.pop();
// console.log(frutas);

// Iterando sobre Arrays
for (const fruta of frutas) {
  // console.log("Fruta Atual" + " " + fruta);
}

// frutas.forEach((fruta) => console.log(`Fruta atual no forEach ${fruta}`));

// Arrays Multidimensionais
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(matriz);
// console.log(matriz[1][2]);

// Exemplo utilizando unshift()
let myArray = [2, 3, 4];

// Adicionando elementos no início do array
myArray.unshift(1, 10, 20, 50);
// console.log('My Array', myArray);

// Exemplo utilizando shift()
let mySecondArray = [2, 3, 4];
let removedFirstElement = mySecondArray.shift();
// console.log(`My removedFirstElement ${removedFirstElement}`);
// console.log(`MySecondArray is ${mySecondArray}`);

// Exemplo utilizando concat
let array1 = [1, 2, 3];
let value = 4;
let array2 = [5, 6];

let newArrayConcated = array1.concat(value, array2);
// console.log("Array concatenado", newArrayConcated);

// Exemplo utilizando arrays multidimensionais
let multimensionalArray1 = [
  [1, 2],
  [3, 4],
];
let multimensionalArray2 = [[5, 6]];

let newMultidimensionalArray =
  multimensionalArray1.concat(multimensionalArray2);
// console.log("MyMultidimensional Array is: ", newMultidimensionalArray);
