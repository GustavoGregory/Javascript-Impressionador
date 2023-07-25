function writeUserMessageOnConsole(message) {
  console.log(message);
}

writeUserMessageOnConsole("essa mensagem aqui!");

const writeUserMessageVariableVersion = function (message) {
  console.log(message);
};

writeUserMessageVariableVersion("Escreva esse argumento - Versão Variável");

const writeUserMessageArrowVersion = (message) => {
  console.log(message);
};

writeUserMessageArrowVersion("Escreva esse argumento - Versão Flecha (Arrow)");
