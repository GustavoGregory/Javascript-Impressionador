const usuario = {
  nome: "Daniel",
  idade: 29,
  time: "Fluminense",
};

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";

usuario.time === "Fluminense"                       //Condição
  ? console.log(mensagemDeBoasVindas1)              //Condição True
  : console.log(mensagemDeBoasVindas2);             //Condição False

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar o seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã !!! ";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
