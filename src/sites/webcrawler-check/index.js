const log           = console.log;
const { logRobo, getHeadless }   = require('../../utils/helpers');
const puppeteer     = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth')()

puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')())
puppeteer.use(pluginStealth);

async function roboWebCrawlerCheck(element){ 

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

        const targetEls = await page.$$('.section p');
        let key = 0;
        let iHtml;

        for(let target of targetEls){
            if(key == 1) iHtml = await page.evaluate(el => el.innerHTML, target);             
            key++;
        }

        iHtml = iHtml.split("<br>");
        logRobo(iHtml[iHtml.length - 2].replace(/<[^>]*>?/gm, ''));
        logRobo("------------------------------");     
        
    } catch (error) {

        log("Erro: " + error );           

    } finally {

        // const pagetitle = await page.title();            
        page.close();
    }     

    console.log(`🤖 Trabalho feito!`);
    browser.close();
}

module.exports = { roboWebCrawlerCheck }