require("dotenv").config();
const log           = console.log;
const { bootstrap } = require("./src/boostrap");
const { setHeadless } = require("./src/utils/helpers");

(async () => {

    const args = require('yargs/yargs')(process.argv.slice(2)).argv;
    const site = args.site;

    log("🤖 Aguardando para iniciar o robô! " + site );

    if( args._ && args._[0] == 'noheadless' ){
        setHeadless(false)
        log("🤖 Iniciando webscraping no site: " + site + ", porém iniciando o navegador visivelmente (no headless) ");
        await bootstrap(site);        

    }else{
        log("🤖 Iniciando webscraping no site: " + site);
        await bootstrap(site);
    }
    
})();
