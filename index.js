const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Vercel';
});

app.listen(80, () => {
    console.log('80项目启动')
});
