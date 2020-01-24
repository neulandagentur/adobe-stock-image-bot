// example case
const getAuthor = require('./main');
const test = '81809773';

(async () => {
    const author = await getAuthor(test);
    console.log(author);
})();
