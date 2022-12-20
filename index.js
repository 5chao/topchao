const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello Vercel";
});

app.listen(2022, () => {
  console.log("2022项目启动");
});
