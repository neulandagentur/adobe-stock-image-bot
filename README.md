# adobe-stock-image-bot
A mini bot that returns the author based on an image id without API.

<img src="https://badge.fury.io/js/adobe-stock-image-bot.svg">

---

# Install

``` npm
npm i adobe-stock-image-bot
```

# Usage 
``` nodejs
const getAuthor = require('adobe-stock-image-bot');

const test = '11111111';

(async () => {
    const author = await getAuthor(test);
    console.log(author);
})();

```
