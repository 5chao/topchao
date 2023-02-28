const Router = require("koa-router");
const qrcode = require("qrcode-terminal");
const Wechat = require("wechat4u");
const router = new Router();

let bot;

try {
  bot = new Wechat("../data/sync-data.json");
} catch (e) {
  bot = new Wechat();
}

router.get(
  "/wechat",
  async (ctx) => {
    if (bot.PROP.uin) {
      bot.restart();
    } else {
      bot.start();
    }

    bot.on("uuid", (uuid) => {
      qrcode.generate("https://login.weixin.qq.com/l/" + uuid, {
        small: true,
      });
      console.log("二维码链接：", "https://login.weixin.qq.com/qrcode/" + uuid);
    });

    /**
     * 登录成功事件
     */
    bot.on("login", () => {
      fs.writeFileSync("../data/sync-data.json", JSON.stringify(bot.botData));
      console.log("登录成功");
      // 保存数据，将数据序列化之后保存到任意位置
      //fs.writeFileSync("./sync-data.json", JSON.stringify(bot.botData));
      let ToUserName = "filehelper";

      /**
       * 发送文本消息，可以包含emoji(😒)和QQ表情([坏笑])
       */
      bot
        .sendMsg("发送文本消息，可以包含emoji(😒)和QQ表情([坏笑])", ToUserName)
        .catch((err) => {
          bot.emit("error", err);
        });
    });
    /**
     * 登出成功事件
     */
    bot.on("logout", () => {
      console.log("登出成功");
      // 清除数据
      //fs.unlinkSync("./sync-data.json");
    });
    /**
     * 联系人更新事件，参数为被更新的联系人列表
     */
    bot.on("contacts-updated", (contacts) => {
      //console.log(contacts);
      //console.log("联系人数量：", Object.keys(bot.contacts).length);
    });

    ctx.body = {
      status: "success",
      message: "Hello Wechat Robot",
      data: { name: "wechat" },
    };
  },
  router.allowedMethods()
);

module.exports = router;
