const axios = require("axios");
const cheerio = require("cheerio");

function parser911() {
  axios.post("https://shouji.911cha.com/15220140288.html").then((res) => {
    console.log(res.data);
  });
}

module.exports = parser911;
