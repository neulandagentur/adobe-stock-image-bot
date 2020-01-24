// import puppeteer
const puppeteer = require('puppeteer');

/**
 * base configs
 *
 * @type {Object}
 */
const config = {
    headless: (process.argv.indexOf('--env=debug') < 0)
};


/**
 * main function to return the author name based on the image id
 *
 * @param {String} id - Image id
 * @return {String|Boolean} - String if an author was found else False
 */
module.exports = async (id) => {
  if (!id || typeof id !== 'string') {
    throw new Error(`${id} is not a valid input`);
  }

  // launch browser
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();
  page.setViewport({width: 1200, height: 764});

  // open adobe stock
  await page.goto('https://stock.adobe.com');

  // insert id into input
  await page.click('.js-search-text-input.input--silent');
  await page.keyboard.type(id);
  await page.keyboard.press('Enter');

  // author html field
  let author;

  try {
    const authorSelector = '[data-t="detail-panel-content-author-name"] a';
    await page.waitForSelector(authorSelector, {
      timeout: 3000
    });
    author = await page.$eval(authorSelector, el => el.innerText);
  } catch (e) {
    return false;
  }

  // close the browser
  await browser.close();

  // return the value
  return author.trim();
};
