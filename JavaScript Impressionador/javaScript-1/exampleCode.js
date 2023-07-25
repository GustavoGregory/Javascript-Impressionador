const usuario = {
  nome: "Daniel",
  idade: 29,
  time: "Fluminense",
};

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindas3 = "Bem vindo, torcedor Vascaíno";
const mensagemDeBoasVindas4 = "Bem vindo, torcedor Santista!";
const mensagemDeBoasVindas5 = "Bem vindo, torcedor do Náutico!";
const mensagemDeBoasVindas6 = "Bem vindo, torcedor Colorado!";
const mensagemDeBoasVindas7 = "Bem vindo, torcedor Gremista!";
const mensagemDeBoasVindas8 = "Bem vindo, torcedor do Cruzeiro!";

const mensagemDeBoasVindasGeral = "Bem vindo, Amante do esporte!";

//If = condição principal
if (usuario.time === "Fluminense") {
  console.log(mensagemDeBoasVindas1);
}

//Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Flamengo") {
  console.log(mensagemDeBoasVindas2);
}

//Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Vasco") {
    console.log(mensagemDeBoasVindas3);
  }
  
  //Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Santos") {
    console.log(mensagemDeBoasVindas4);
  }

  //Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Náutico") {
    console.log(mensagemDeBoasVindas5);
  }

  //Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Internacional") {
    console.log(mensagemDeBoasVindas6);
  }

  //Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Grêmio") {
    console.log(mensagemDeBoasVindas7);
  }

  //Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if (usuario.time === "Cruzeiro") {
    console.log(mensagemDeBoasVindas8);
  }

//Else = executa caso nenhuma condição satisfaz
else {
  console.log(mensagemDeBoasVindasGeral);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar o seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã !!! ";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
