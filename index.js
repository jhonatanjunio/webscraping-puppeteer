require("dotenv").config();
const log           = console.log;
const cron          = require("node-cron");
const { bootstrap } = require("./src/boostrap");
        
(async () => {

    const args        = process.argv.slice(2);
    const marketplace = args[1];

    log("🤖 Aguardando para iniciar o robô! " + marketplace );

    if( args && args[2] == '-c' ){

        let tempoCron = process.env[`TIME_${marketplace.toUpperCase()}`];
        
        cron.schedule(tempoCron, async () => {
            log("🤖 Iniciando robô! " + marketplace + " no tempo " + tempoCron);
            await bootstrap(marketplace);
        });

    }else{
        log("🤖 Iniciando robô! " + marketplace);
        await bootstrap(marketplace);
    }
    
})();
