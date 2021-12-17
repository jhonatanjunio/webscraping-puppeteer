require("dotenv").config();
const { roboWebscraper }      = require("./sites/webscraper-io");
const { roboWebCrawlerCheck } = require("./sites/webcrawler-check");

async function bootstrap(site){

    try {        
        let endpoints = [
            {
                "title": "more",
                "link": 'https://webscraper.io/test-sites/e-commerce/more',
            },
            {
                "title": "webcrawler-check",
                "link": 'https://gs.statcounter.com/detect',
            },
        ];

        switch (site) {            
            case "webscraper":
                await roboWebscraper(endpoints[0]);
            break;
            case "webcrawler-check":
                await roboWebCrawlerCheck(endpoints[1]);
            break;
        }

    } catch (error) {
        console.log(error);
    } 

}

module.exports = { bootstrap };