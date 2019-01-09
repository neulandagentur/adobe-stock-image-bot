const getAuthor = require('./bot');

const test = '81809773';

(async () => {
    const author = await getAuthor(test);
    console.log(author);
})();
