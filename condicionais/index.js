// if
// else
// else if
// switch

// IF e Else exemplo
let idade = 10;
// simbolo de maior >
// simbolo de menor <
// simbolo de igual =

if (idade >= 18) {
  console.log("Você é maior de idade, e caso tenha habilitação pode dirigir!");
} else if (idade >= 16) {
  console.log(
    "No Brasil você só pode tirar uma habilitação caso tenha 18 anos, porém nos EUA você pode tirar uma habilitação à partir dos 16 anos"
  );
} else {
  console.log("Você é menor de idade e não pode dirigir ainda!");
}

// Switch
let diaSemana = 15;
let nomeDia;

switch (diaSemana) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;

  default:
    nomeDia = "Dia inválido";
}

console.log(`Hoje é ${nomeDia}`);
