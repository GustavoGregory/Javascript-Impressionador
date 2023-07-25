// setTimeout(function () {
//   writeThisOnConsole("essa mensagem aqui!");
// }, 2000);

function writeThisOnConsole(message) {
  console.log(message);
}

const resultFunction = function () {
  writeThisOnConsole("essa mensagem aqui!");
};

// const result = writeThisOnConsole("parametro");
// console.log(result);

resultFunction();
