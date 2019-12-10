const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  if (ctx.url === "/index") {
    ctx.cookies.set("MyName", "JSPang", {
      domain: "192.168.31.237",
      // path: "/index",
      maxAge: 1000 * 60 * 60 * 24,
      expires: new Date("2019-19-10"),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = "Cookie is set";
  } else {
    if (ctx.cookies.get("MyName")) {
      ctx.body = ctx.cookies.get("MyName");
    } else {
      ctx.body = "cookie is null";
    }
  }
});

app.listen(3000, () => {
  console.log("[demo] server is starting at port 3000");
});
