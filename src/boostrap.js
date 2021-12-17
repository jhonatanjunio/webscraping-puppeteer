
require("dotenv").config();
const { roboWebscraper }     = require("./sites/webscraper-io");

async function bootstrap(marketplace){

    try {        
        let endpoints = {
            "more": 'https://webscraper.io/test-sites/e-commerce/more',
        };

        switch (marketplace) {            
            case "webscraper":                
                await roboWebscraper(endpoints[Math.floor(Math.random() * endpoints.length)]);
            break;
        }

    } catch (error) {
        console.log(error);
    } 

}

module.exports = { bootstrap };