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

// Exemplo utilizando slice
let originalArray = [1, 2, 3, 4, 5];
let newSlicedArray = originalArray.slice(-4);
// console.log("newSlicedArray", newSlicedArray);

// Exemplo utilizando slice em arrays multidimensionais
let multidimensionalArrayForSlice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newSlicedMultidimensionalArray = multidimensionalArrayForSlice.slice(1);
// console.log("newSlicedMultidimensionalArray", newSlicedMultidimensionalArray);

// Exemplos utilizando splice()

// Adicionar elementos em um ponto específico do array:
let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 0, 6, 7); // Adiciona os elementos 6 e 7 a partir do indice 2 => [1,2,6,7,3,4,5]
// console.log("My splicedArray", spliceArray);

// Remover elementos de um array
let spliceRemoveElementArray = [1, 2, 3, 4, 5];
spliceRemoveElementArray.splice(2, 2); // [1, 2, 5]
// console.log('spliceRemoveElementArray', spliceRemoveElementArray);

// Substituindo elementos de um array
let spliceReplaceElementArray = [1, 2, 3, 4, 5];
// Remover 2 elementos a partir do indice 2 e adicionar 6 e 7
spliceReplaceElementArray.splice(2, 2, 6, 7); // [1, 2, 6, 7, 5]
//  console.log('spliceReplaceElementArray', spliceReplaceElementArray);

// Remover elementos do final do array
let removeElementArray = [1, 2, 3, 4, 5];
removeElementArray.splice(-3); // Remover os dois últimos elementos do array
//  console.log('removeElementArray', removeElementArray)

// Exemplo utilizando indexOf()
// Utilizando para encontrar a posição do primeiro elemento
const myIndexOfArray = [1, 2, 3, 4, 2, 5];
const index = myIndexOfArray.lastIndexOf(200);
// console.log('INDEX OF NUMBER 2', index);

// Exemplo utilizando forEach()
let myForEachArray = [1, 2, 3, 4, 5];
let newArrayWithForEach = [];

myForEachArray.forEach((item, index, array) =>
  newArrayWithForEach.push(item * 2)
);
console.log("newArrayWithForEach", newArrayWithForEach);
