const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

let home = new Router();
home
  .get("/jspang", async ctx => {
    ctx.body = "Home JSpang page";
  })
  .get("/todo", async ctx => {
    ctx.body = "Home todo page";
  });

let page = new Router();
page
  .get("/jspang", async ctx => {
    ctx.body = "Page JSpang page";
  })
  .get("/todo", async ctx => {
    ctx.body = "Page todo page";
  });

//父级路由
let router = new Router();
router.use("/home", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("starting at port 3000");
});
