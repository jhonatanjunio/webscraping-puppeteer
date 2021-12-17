const chalk     = require('chalk');

function logRobo(msg){
  console.log(chalk.bgHex("#24ade3").bold("Robô"), msg);
}

function trataPrecos(preco) {
  return preco
    .replace(/(<([^>]+)>)/gi, "")
    .replace("R$", "")
    .replace(" ", "")
    .replace("&nbsp", "")
    .replace(".", "")
    .replace(",", ".")
    .trim();
}

module.exports = { logRobo, trataPrecos };