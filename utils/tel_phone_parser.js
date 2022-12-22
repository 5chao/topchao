const axios = require("axios");
const cheerio = require("cheerio");

async function parserTelePhone(phone = "0755-25626811") {
  let telePhone = { name: "", addr: "", type: "" };
  let data = await axios.post("https://mdianhua.mapbar.com/search2_" + phone);

  const $ = cheerio.load(data.data);
  telePhone.name = $("dd a").text();
  let _href = $("dd a").attr("href");
  let addrResData = await axios.post(_href);
  let $addr = cheerio.load(addrResData.data);

  let city = $($addr(".dh_chaxun li")[2]).html();
  let detail = $($addr(".dh_chaxun li")[2]).html();
  let type = $($addr(".dh_chaxun li")[3]).html();

  telePhone.addr = detail;
  telePhone.type = type;

  return telePhone;
}

module.exports = parserTelePhone;
