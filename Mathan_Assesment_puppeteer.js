const puppeteer = require('puppeteer');
async function assesment(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [Publication_Date] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/span[1]/font/font');
    const txt = await Publication_Date.getProperty('textContent');
    const rawtxt = await txt.jsonValue();
    console.log(rawtxt);

    const [Bidding_Date] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/span[6]/font');
    const txt1 = await Bidding_Date.getProperty('textContent');
    const rawtxt1 = await txt1.jsonValue();
    console.log(rawtxt1);

    const [Obj] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/p[1]');
    const txt2 = await Obj.getProperty('textContent');
    const rawtxt2 = await txt2.jsonValue();
    console.log(rawtxt2);

    const [Links] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[3]/div/table/tbody/tr[1]/td[2]');
    const src = await Links.getProperty('href');
    const link= await src.jsonValue();

    browser.close();

}

assesment('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020')