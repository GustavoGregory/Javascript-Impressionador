function procedimento1(outraFuncao) {
  outraFuncao();
}

function procedimento2() {
  console.log("A função  procedimento 2 foi executada com sucesso");
}

//procedimento(undefined) = procedimento1(procedimento2())

procedimento1(procedimento2);
