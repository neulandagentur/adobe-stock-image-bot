const puppeteer = require('puppeteer');

const url = 'https://stock.adobe.com/de/';
const config = {
    headless: true
};

const elements = {
    login: '.js-search-text-input.input--silent',
    author: '[data-ingest-clicktype="details-contributor-link"]'
};

const getAuthor = async (imageNumber) => {
    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();
    page.setViewport({width: 1200, height: 764});
    await page.goto(url);

    // click to the login inoutfield
    await page.click(elements.login);
    await page.keyboard.type(imageNumber);
    // await
    page.keyboard.press('Enter');

    await page.waitFor(2000);

    let text;

    try {
      const element = await page.$(elements.author);
      text = await page.evaluate(element => element.textContent, element);
    } catch (e) {
      console.log(e);
    }

    // convert the string
    text = text.replace(/ +(?= )/g,'').replace(/\n/g,'').trim();

    return text;
};

module.exports = getAuthor;
