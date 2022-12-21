const Router = require("koa-router");
const router = new Router();

router.get(
  "/",
  async (ctx) => {
    ctx.body = {
      status: "success",
      message: "Hello Koa22111",
    };
  },
  router.allowedMethods()
);

module.exports = router;
