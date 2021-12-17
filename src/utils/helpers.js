const chalk     = require('chalk');

let _headless = true;

function logRobo(msg){
  console.log(chalk.bgHex("#24ade3").bold("Robô"), msg);
}

function setHeadless(headless){
  _headless = headless
}

function getHeadless(){
  return _headless;
}
module.exports = { logRobo, setHeadless, getHeadless };