<p align="center"><img src="assets/logo.png" width="200" height="auto"></p>

---

Helper function that returns an author of an adobe stock image id.

<img src="https://badge.fury.io/js/adobe-stock-image-bot.svg">

---

## Install

``` npm
npm i adobe-stock-image-bot
```

## Usage
``` nodejs
const getAuthor = require('adobe-stock-image-bot');

const test = '184567447';

(async () => {
    const author = await getAuthor(test);
    console.log(author);
})();

```
