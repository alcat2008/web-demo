/* eslint-disable */

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://baidu.com')
  .type('#kw', 'github nightmare')
  .click('#su')
  .wait('.result.c-container .t.c-title-en a')
  .evaluate(function () {
    return document.querySelector('.result.c-container .t.c-title-en a').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
