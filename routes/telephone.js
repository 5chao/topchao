const Router = require("koa-router");
const parserTelePhone = require("../utils/tel_phone_parser");
const router = new Router();

// 固定电话查询
router.post(
  "/telephone",
  async (ctx) => {
    console.log(ctx.query.phone);

    let data;
    if (ctx.query.phone) {
      data = await parserTelePhone(ctx.query.phone);
    }

    ctx.body = {
      status: "success",
      message: "Hello telephone",
      data: data,
    };
  },
  router.allowedMethods()
);

module.exports = router;
