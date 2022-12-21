const Router = require("koa-router");
//const parser911 = require("../utils/cell_phone_parser_911");
const router = new Router();

router.post(
  "/",
  async (ctx) => {
    ctx.body = {
      status: "success",
      message: "Hello cellphone11",
    };
  },
  router.allowedMethods()
);

module.exports = router;
