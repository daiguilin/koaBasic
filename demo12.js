const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new Koa();

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  ctx.body = "Hello world";
});

app.listen(3000, () => {
  console.log("[demo] server is starting at port 3000");
});
