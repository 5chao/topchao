const Router = require("koa-router");
const parserTelePhone = require("../utils/tel_phone_parser");
const router = new Router();

// 固定电话查询
router.post(
  "/telephone",
  async (ctx) => {
    let data = await parserTelePhone("0779-2296236");

    ctx.body = {
      status: "success",
      message: "Hello telephone",
      data: data,
    };
  },
  router.allowedMethods()
);

module.exports = router;
