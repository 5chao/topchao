const Router = require("koa-router");
const router = new Router();

router.post(
  "/",
  async (ctx) => {
    ctx.body = {
      status: "success",
      message: "Hello cellphone",
    };
  },
  router.allowedMethods()
);

module.exports = router;
