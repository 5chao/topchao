const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const indexRoutes = require("./routes/index");
const cellphoneRoutes = require("./routes/cellphone");
const telephoneRoutes = require("./routes/telephone");

const app = new Koa();

app.use(bodyParser());

app.use(indexRoutes.routes());
app.use(cellphoneRoutes.routes());
app.use(telephoneRoutes.routes());

app.listen(3008, () => {
  console.log("3008项目启动!!!!!");
});
