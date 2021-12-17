const log           = console.log;
const { logRobo, getHeadless }   = require('../../utils/helpers');
const puppeteer     = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth')()

puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')())
puppeteer.use(pluginStealth);

async function roboWebscraper(element){ 

    log(`🤖 Acessando o site: ${element.link}`);        
    
    const browser = await puppeteer.launch({
        headless: getHeadless(),
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    logRobo("------------------------------");     

    const page = await browser.newPage();    
        
    try{
        await page.goto(element.link);  
    }catch(error){
        log("Ocorreu um erro ao acessar o link");        
    }        

    try {

        const getComputersLink = await page.$$('.category-link')
        await getComputersLink[0].click()
        await page.waitForNavigation()
        
        const getTabletsLink = await page.$$('.subcategory-link')
        await getTabletsLink[1].click()
        await page.waitForNavigation()

        let getGalaxyNote = await page.$('a.title[title="Galaxy Note"]')
        
        while (!getGalaxyNote || getGalaxyNote == null) {
            await page.click(".ecomerce-items-scroll-more");
            
            getGalaxyNote = await page.$('a.title[title="Galaxy Note"]')
        }

        await getGalaxyNote.click();
        await page.waitForNavigation();
        
        await page.select("select[aria-label='color']", "option[value='White']")                
        
        await page.click("button[value='512']");

        const price = await page.$("h4.price");
        const getPrice = await page.evaluate(price => price.innerText, price);

        logRobo(`Preço do aparelho: ${getPrice}`);

    } catch (error) {

        log("Erro: " + error );           

    } finally {
        page.close();
    }     

    console.log(`🤖 Trabalho feito!`);
    browser.close();
}

module.exports = { roboWebscraper }