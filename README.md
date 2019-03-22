<p align="center"><img src="assets/logo.png" width="300" height="auto"></p>

---

# adobe-stock-image-bot
A mini bot that returns the author based on an image id without API.

<img src="https://badge.fury.io/js/adobe-stock-image-bot.svg">

---

## Install

``` npm
npm i adobe-stock-image-bot
```

## Usage
``` nodejs
const getAuthor = require('adobe-stock-image-bot');

const test = '11111111';

(async () => {
    const author = await getAuthor(test);
    console.log(author);
})();

```

## Changelog

### 0.1.1
- Change headless from false to true
